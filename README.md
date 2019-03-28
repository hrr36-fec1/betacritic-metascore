# BetaCritic
## Introduction
Betacritic is an online media review aggregator. This particular component aggregates critic and user reviews, and displays/organizes them in an intuitive and visually helpful way.

The _technologies_ used for development were primarily: React, MongoDB, Express, Jest, and Styled Components.
For _deployment_, I used Docker (docker-compose) and deployed the service to EC2 database to mLab.

## Related Projects
See the components built by the rest of my team, as well as the proxy service that hosted all of the components on a single web page, in this github organization:
  - https://github.com/hrr36-fec1/
 
## Requirements
This project utilizes MongoDB, Node, and npm, and docker. The instructions below explain how to install and run the additional dependencies.

## Usage - Dev
1. Install dependencies with ```npm install```
1. Use ```npm run start-dev``` to start the express server
2. Use ```npm run react-dev```n to build bundle.js
3. To seed the database, run ```npm run db:setup```
4. Visit http://127.0.0.1:4444 to see the service.

## Usage - Production
1. Use ```npm run production``` and ```npm run build``` which will create a docker image and run it in a container utilizing the docker-compose files in the /docker folder.

## In Action
![A gif of this app in action](https://i.imgur.com/umPuB3Y.gif)
