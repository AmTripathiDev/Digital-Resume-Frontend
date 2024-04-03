# dockerfile 

FROM node:12.22.12-alpine As base 

WORKDIR /src/frontend

COPY package*.json ./

RUN npm install -g @angular/cli@10.1.5

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "ng", "serve","--host", "0.0.0.0", "--poll"]