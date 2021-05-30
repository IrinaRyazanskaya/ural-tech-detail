FROM node:14 as builder

COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM caddy:2 as runtime

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/build /srv
