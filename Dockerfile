FROM node:11.9.0-stretch as build

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

#ARG baseUrlApi
#ARG baseUrlSocket

#ENV REACT_APP_API_URL $baseUrlApi
#ENV REACT_APP_SOCKET_URL $baseUrlSocket
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install -g react-scripts

COPY package.json /usr/src/app/package.json

RUN npm install -f
COPY . /usr/src/app

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build_production /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]