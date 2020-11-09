FROM node:10.16.0

RUN mkdir -p /usr/share
RUN cd /usr/share

WORKDIR /app
COPY ./ /app
RUN npm i -g lerna
RUN lerna bootstrap
RUN lerna run --scope @portalq/api --scope @portalq/core build 
EXPOSE 4000
CMD cd api && node dist/shared/infra/http/server.js