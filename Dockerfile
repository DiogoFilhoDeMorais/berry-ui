# STAGE 01
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# STAGE 02
FROM nginx:alpine
COPY --from=node /app/dist/berry-ui /usr/share/nginx/html