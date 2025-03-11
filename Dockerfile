#Build the APP
FROM node:18-alpine AS builder
WORKDIR /app
COPY ./app .

# Stage 2 (RUN)
FROM nginx:1.23-alpine
COPY --from=builder /app /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]