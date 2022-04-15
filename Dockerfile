FROM node:latest

WORKDIR /app

#Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]