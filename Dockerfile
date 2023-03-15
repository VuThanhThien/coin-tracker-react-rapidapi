FROM node:18-alpine

EXPOSE 3000

WORKDIR /app

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "run", "dev"]