FROM node:lts AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
COPY ./.npmrc ./.npmrc

ARG registryGithub
ARG GITHUB_USER
ARG GITHUB_TOKEN

RUN npm install -g npm-cli-login
RUN npm-cli-login -u $GITHUB_USER -p $GITHUB_TOKEN -r $registryGithub -s @CienciaArgentina --config-path "./.npmrc"
RUN npm config set registry $registryGithub

RUN npm install
RUN npm run build

FROM node:lts-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY knexfile.js ./

RUN npm install --production
EXPOSE $APP_PORT

COPY --from=builder /usr/src/app/dist ./dist

CMD ["npm","start"]
