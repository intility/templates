# syntax=docker/dockerfile:1
FROM node:lts-slim as build
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

FROM ghcr.io/intility/nginx-unprivileged-react@sha256:ddfd3f040f3ec6342fdabcaa1299805d27cc08aba8914aac2766ba16fa6cff3c

# Copy build files
COPY --from=build /src/dist /usr/share/nginx/html
