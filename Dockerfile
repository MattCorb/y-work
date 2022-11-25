FROM node:16.18.1 as build

WORKDIR /react-app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "build" ]