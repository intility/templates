FROM node@sha256:01627afeb110b3054ba4a1405541ca095c8bfca1cb6f2be9479c767a2711879e AS build # 12

WORKDIR /src

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM intility/nginx-unprivileged-react@sha256:fbade102effffd21a991393ab6096eb537ded7a430aafd42a0037023f0994357 # 1.18.2

COPY --from=build /src/build /usr/share/nginx/html
