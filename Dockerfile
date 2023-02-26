# FROM node:alpine
FROM alpine

RUN apk add --no-cache nodejs npm

WORKDIR /app/

COPY package.json .

RUN npm install && \
    npm run build

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
