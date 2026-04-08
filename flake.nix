{
  description = ''
    devShell configurations for website deployment.
    Targeted for Nix users.
  '';
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };
  outputs =
    { self, nixpkgs, ... }@inputs:
    let
      outputs = self.outputs;
      lib = nixpkgs.lib // outputs.lib;
      inherit (lib.trivial) pipe;
    in
    {

      lib = {
        supportedSystems = builtins.attrNames nixpkgs.legacyPackages;
        systemSpecificVars = system: {
          pkgs = import inputs.nixpkgs { inherit system; };
          inherit system;
        };
        forAllSystems =
          gen: lib.genAttrs lib.supportedSystems (system: gen (lib.systemSpecificVars system));
      };

      devShells = lib.forAllSystems (
        { pkgs, system, ... }:
        rec {
          default = smd-ka;
          smd-ka = pkgs.mkShell {
            packages = with pkgs; [
              nodejs # includes npm; may select specific version with suffix _23
            ];
          };
        }
      );

    };
}
