# Synonyms app

API repository: https://github.com/Rawaa-Al-Kabbani/synonyms-api

Live URL: https://synonyms-client-dvg0c4axhuheh4hw.swedencentral-01.azurewebsites.net/

This is my implementation of the frontend for the Syonyms app. It is written in Typescript and React.js is used as the framework.

When running the app via Docker Nginx is used to serve the static build files.

You can create and search for existing synonyms.

## Requirements

- Node.js and Yarn for running the app locally.
  If you are using NVM you can install a compatible version from the `.nvmrc` file using `nvm use`
- Docker for running the app via Docker
- docker-compose for running the app via docker-compose

## How to run it using Docker

To run it using Docker:

1. Ensure you have Docker installed on your system
2. Build the Docker image using `docker build -t synonyms-app .`
3. Start the container using `docker run -p 5173:80 -t synonyms-app`
4. The app will be available on http://localhost:5173

## How to run it using docker-compose

To run it using docker-compose:

1. Ensure you have Docker and docker-compose installed on your system
2. Start the app using `docker-compose up`
3. The app will be available on: http://localhost:5173

## How to run formatting

To run the formatting:

1. Install the development dependencies using `yarn install`
2. Run `yarn run format:check`

## How to run linting

To run the linting:

1. Install the development dependencies using `yarn install`
2. Run `yarn run lint`

## How to run tests

To run the tests:

1. Install the development dependencies using `yarn install`
2. Run `yarn run test`

## How to run E2E tests

To run the E2E tests:

1. Install the development dependencies using `yarn install`
2. Run `yarn run test:e2e`

## To generate the GraphQL types

To generate the GraphQL types:

1. Install the dependencies using `yarn install`
2. Ensure the backend is running, and that you have the correct schema URL configured in `codegen.ts`
3. Run `yarn run graphql-codegen`
