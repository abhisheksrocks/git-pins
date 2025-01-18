FROM node:23.6.0-slim

WORKDIR /workspace

COPY app/package*.json ./
COPY app/src ./src
COPY app/tsconfig.json ./

RUN npm run setup
RUN npm run build

CMD [ "npm", "run", "serve" ]