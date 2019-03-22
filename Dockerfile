FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR .

# Copying source files
COPY . .

# Building app
RUN yarn build
ARG GOOGLEMAP_API_KEY
ENV TESTING 1231233253252355235
RUN echo GOOGLEMAP_API_KEY=$GOOGLEMAP_API_KEY > .env
RUN echo testing $TESTING

# Running the app
CMD ["yarn", "start"]