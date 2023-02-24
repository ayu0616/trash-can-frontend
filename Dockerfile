# FROM node:alpine
FROM alpine

RUN apk add --no-cache nodejs npm

WORKDIR /app/

COPY . .

RUN npm install && \
    npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]