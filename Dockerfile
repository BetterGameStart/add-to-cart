FROM node:10.20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build-p
EXPOSE 3001
CMD ["npm", "run", "start"]