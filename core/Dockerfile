FROM node:10.16.0

RUN mkdir -p /usr/share
RUN cd /usr/share

WORKDIR /app
ADD . /app
RUN yarn
RUN yarn build
EXPOSE 4000
CMD ["node", "dist/server.js"]