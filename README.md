# Carlsberg Digital React Template

To use this repo create a template in order to bootstrap new react applications development.

## Stack

The following are the main libraries that compose this stack:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [react-redux](https://react-redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [CSS Modules](https://github.com/css-modules/css-modules) with SCSS
- [React-router](https://reacttraining.com/react-router/web/)

## Pre-requisites

The usage of this boilerplate assumes that you have [node](https://nodejs.org) already installed.

## Usage

This repo was configured using [yarn](https://yarnpkg.com), so you should use it to avoid conflicts. Install it globally using:

```
npm install yarn -g
```

After this you should be good to go with the usual steps:

```
yarn
yarn start
```

To build run:

```
yarn build
```

## Dockerfile

To build the included Dockerfile make sure you build the project first and the run:

```
docker build . --tag name-of-image:latest
```

To launch a container based on the image run:

```
docker run --rm -d -p 80:80 name-of-image:latest
```

## GitHub Actions

This repo contains a single Github Actions file which will build, create and push a Docker image to Docker Hub.

For the deployment to work the following secrets must be created:

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* DOCKER_USERNAME
* DOCKER_PASSWORD
