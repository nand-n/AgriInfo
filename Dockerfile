FROM node:18-alpine as ui-build

WORKDIR /usr/app/client/
COPY package*.json ./
RUN yarn install 
COPY src/ ./src
COPY public/ ./public

FROM node:18-alpine  AS server-build 
WORKDIR /usr/app/

COPY --from=ui-build /usr/app/client/build ./client/build
WORKDIR /urs/app/server/

COPY package*.json ./
RUN yarn install 
COPY server.js ./
ENV NODE_ENV=production
EXPOSE 5000
CMD ["node" ,"server.js"]