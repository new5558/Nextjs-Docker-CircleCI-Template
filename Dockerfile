FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR .

# Copying source files
COPY . .

# Building app
RUN yarn build

# Running the app
CMD ["yarn", "start"]
