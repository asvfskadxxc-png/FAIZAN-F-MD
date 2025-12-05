FROM node:18-alpine

RUN apk update && apk add --no-cache \
    ffmpeg \
    imagemagick \
    git \
    bash

WORKDIR /app

# Only copy package.json (lock file is missing)
COPY package.json .

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
