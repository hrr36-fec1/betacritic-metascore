FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
# Run scripts for proxy server
RUN npm install
EXPOSE 4444
## MongoDB is very slow to start up, so we force a wait...
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && npm start