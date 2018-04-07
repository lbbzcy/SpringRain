FROM node:8.11.1

RUN mkdir -p /home/nodeproject
WORKDIR /home/nodeproject
COPY . /home/nodeproject
RUN npm install

EXPOSE 3000
CMD [ "npm", "start"]