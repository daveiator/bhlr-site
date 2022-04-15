FROM node:latest

WORKDIR /opt/app

#Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "."]
