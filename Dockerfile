FROM node:14.15.4-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]