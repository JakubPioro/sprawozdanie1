FROM node:alpine

LABEL maintainer="Jakub Pióro"
LABEL description="Sprawozdanie_1"

WORKDIR '/usr/src/app'

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["index.js"]docker