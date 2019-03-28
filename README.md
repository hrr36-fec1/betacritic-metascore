# Project Name
## BetaCritic

BetaCritic is a recreation of the popular Metacritic movie rating website. BetaCritic was created as an education project to learn more about app development and tools, including (but not limited to) React, MongoDB, Express, Jest, and Styled Components.

## Related Projects
See the related component and proxy repos here.
  - https://github.com/hrr36-fec1/
 
## Requirements
This project utilizes MongoDB, Node, and npm.

## Usage - Dev
1. Install dependencies with ```npm install```
1. Use npm start to start the express server
2. Use npm run react-dev to start the webpack service
3. To seed the database, run node utils/seed.js

## Usage - Production
1. Use ```npm run production``` and ```npm run build``` which will create a docker image and run it in a container utilizing the docker-compose files in the /docker folder.
