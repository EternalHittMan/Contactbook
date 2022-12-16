
FROM node:latest as build
WORKDIR /app/backend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/backend/dist/frontend /usr/share/nginx/html
