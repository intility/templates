# syntax=docker/dockerfile:1
FROM node:lts-slim@sha256:235600a8101ab264e117b1768e925532262668dc9b581ef1dd7d96ced463b8e7 as build
WORKDIR /src

# .npmrc should be pre-configured with the registry
COPY ./package.json package-lock.json .npmrc ./

# Configure npm to read the environment variable NODE_AUTH_TOKEN when authenticating to the registry
RUN echo "//npm.intility.com/:_authToken=\${NODE_AUTH_TOKEN}" >> .npmrc

# Mount the secret with id NODE_AUTH_TOKEN to the environment variable NODE_AUTH_TOKEN during npm ci
RUN --mount=type=secret,id=NODE_AUTH_TOKEN,env=NODE_AUTH_TOKEN \
    npm ci

# Copy the source code and build the app
COPY . .
RUN npm run build

FROM ghcr.io/intility/nginx-unprivileged-react:2.6.3@sha256:55f192839dd4715568edc644edba96adeda7de41363ab5b0a102380d66f8a84d

# Copy build files
COPY --from=build /src/dist /usr/share/nginx/html
