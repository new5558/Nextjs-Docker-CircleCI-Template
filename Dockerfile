FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR .

# Copying source files
COPY . .

# Building app
RUN yarn build

# Running the app
ARG GOOGLEMAP_API_KEY
CMD ["GOOGLEMAP_API_KEY=$GOOGLEMAP_API_KEY", "yarn", "start"]