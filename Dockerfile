FROM node:12
RUN mkdir /opt/app/
WORKDIR /opt/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
ADD ./ /opt/app/
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
