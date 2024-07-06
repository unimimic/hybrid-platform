FROM node:20

# set the working directory
WORKDIR /app

# copy the src to the folder
COPY . ./app

RUN yarn

# start the server
CMD ["yarn", "dev"]
