FROM node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .
EXPOSE 3000
CMD ["npm", "start"]