# Use an official Python runtime as a base image
FROM debian:latest

# Define working directory and copy source files
WORKDIR /app
COPY . /app

# Removing sh so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Define environment variables
# ENV NVM_DIR /usr/local/nvm

# Requesting variables from build
# ARG NODE_VERSION=6.10.2

# Install any needed packages
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    apt-transport-https
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn

# Define environment variables
# ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
# ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run when the container launches
ENTRYPOINT ["yarn"]
CMD ["serve"]
