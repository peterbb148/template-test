# Carlsberg Digital React Boilerplate

This repo objective is to be forked in order to bootstrap new react applications development. This repo should not be altered, only forked into a new preoject repo.

## Stack

One of the reasons for this repo to exist is to enforce the usage of some libraries. This way we make sure that all Carlsberg developers know what to expect when a react application lands on their shoulders.

With that in mind, the following are the main libraries that compose this stack:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [react-redux](https://react-redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [CSS Modules](https://github.com/css-modules/css-modules) with SCSS
- [React-router](https://reacttraining.com/react-router/web/)

From project to project so things will change based on needs and preferences, just keep in mind that you may not be handling this forever. try to keep as close as possible to this folder structure and libraries, if not possible leave a brief description at your repo README or code so that other can navigate easily.

## Pre-requisites

The usage of this boilerplate assumes that you have [node](https://nodejs.org) already installed on your personnal computer

## Usage

This repo was configured using [yarn](https://yarnpkg.com), so you should use it to avoid conflicts.
Install it globally using 

```console
npm install yarn -g
```

After this you should be good to go with the usual steps

```console
yarn

yarn start
```
## GitHub Actions

This repo contains a single Github Actions file which will build, create and push a Docker image to Docker Hub.

For the deployment to work the following secrets must be created:

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* DOCKER_USERNAME
* DOCKER_PASSWORD
