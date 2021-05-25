FROM node:14

COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

EXPOSE 80
CMD npx serve -s build -l 80
