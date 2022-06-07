---
lang: en-US
title: Home
heroText: 'elastic logger'
heroImage: '/images/logger-trans3.png'
home: true
tagline: Simple API to log events in an Elasticsearch instance.
actions:
  - text: API Reference
    link: /api-guide
    type: primary
footer: Powered by Virail GmbH
---
# Quick local dev Installation
The server can also be run without the container for dev purposes. Simply install an [elasticsearch server locally](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html) and run the below setup.

```sh
# Clone repository
git clone git@github.com:bernardcosta/elastic-logger.git

# Go to project root
cd elastic-logger

# Install all dependencies
npm install

# Install nodemon for monitoring during dev
npm install --save-dev nodemon

# Run the project
nodemon index.js
```

# Self-host elastic-logger

Docker & docker-compose are needed to run elastic-logger as a server

Follow the official installation instructions:

1. [Docker installation instructions](https://docs.docker.com/desktop/linux/install/)
2. [Docker compose installation instructions](https://docs.docker.com/compose/install/)


Next, clone this repository on your server:
```sh
git clone git@github.com:bernardcosta/elastic-logger.git
```

build & run the docker container with `docker-compose.yml`:

```sh
docker-compose up -d node
```

By default the API will be running on `127.0.0.1:3000` by port binding to the container's `3000` . This can be changed by adding this variable in a `.env ` file at the root level directory:

```sh
NODE_LISTEN=<some other IP>:<some other port>
``` 

After restarting the container, the API will be served on whatever the contents of `NODE_LISTEN` are.
Go to [API reference](./api-guide.md) for more details regarding the `.env` file.