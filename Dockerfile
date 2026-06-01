FROM docker.io/library/node:lts-alpine AS base


# get pmtiles binary
FROM docker.io/protomaps/go-pmtiles AS go-pmtiles
# prepare maplibre assets
FROM docker.io/library/debian:stable AS maplibre-assets
WORKDIR /app

# download required packages for prepare_assets.sh
RUN apt-get update && apt-get install -y --no-install-recommends\
    ca-certificates \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# provide pmtiles binary
COPY --from=go-pmtiles /go-pmtiles /usr/bin/pmtiles

COPY ./prepare_assets.sh ./

RUN ./prepare_assets.sh


# Build stage
FROM base AS build
WORKDIR /app

# Define build argument (ARG)
ARG API_URL="https://api.smd-karlsruhe.de"
ARG PR_NUMBER=""

# Set environment variable (optional for runtime)
ENV VITE_API_URL=$API_URL

# Copy package.json and install dependencies
COPY ./package*.json ./
RUN npm install

# Copy prepared assets
COPY --from=maplibre-assets /app .
# Copy all source files (overwrites any assets acquired by Dockerfile if they exist locally individually)
COPY . .

# Build the application
RUN npm run build


# Production stage
FROM base AS production

# Copy built application and essential files from build stage
COPY --from=build /app/build .
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .

# Install production dependencies
RUN npm ci --omit dev

EXPOSE 3000

CMD ["node", "."]
