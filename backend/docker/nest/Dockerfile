FROM node:18.0-alpine as dev
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=development
RUN npm run build

FROM node:18.0-alpine as prod
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY . .
RUN npm install --only=production
COPY --from=dev /usr/src/app/dist ./dist
CMD npm run migration:up; node dist/main