# FROM node:alpine
FROM alpine

RUN apk add --no-cache nodejs npm
RUN npm i -g corepack

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app/

# COPY package.json .
COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build


EXPOSE 3000

CMD [ "pnpm", "run", "start" ]
