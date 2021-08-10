FROM node:16.6.1-alpine3.14

WORKDIR /home/node

COPY package*.json ./
COPY db.js ./
COPY server.js ./

RUN npm install

CMD ["npm", "start"]