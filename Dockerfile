FROM node:12 as base

WORKDIR /app
COPY package.json .

RUN npm install -g nodemon
RUN npm install

COPY . .

FROM base as develop
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base as staging
EXPOSE 3000
CMD ["npm", "run", "test:watch"]


FROM base as staging
EXPOSE 3000
# CMD ["npm", "run", "test:watch"]
CMD ["bash"]
