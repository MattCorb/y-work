FROM node:16.18.1 as build

WORKDIR /react-app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /react-app/build /usr/share/nginx/html
RUN ["chmod", "+x", "/docker-entrypoint.sh"]
ENTRYPOINT ["sh", "/docker-entrypoint.sh"]