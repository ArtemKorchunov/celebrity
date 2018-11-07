FROM node:8-alpine
RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
RUN mkdir /app/dist/img

WORKDIR /app/server

RUN npm install

CMD [ "node", "index" ]