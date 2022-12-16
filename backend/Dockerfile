FROM node:18
WORKDIR /app/backend
COPY database.js /app/backend
COPY index.js /app/backend
COPY Schema.js /app/backend
COPY package.json /app/backend
RUN npm install
CMD npm start
EXPOSE 3000
