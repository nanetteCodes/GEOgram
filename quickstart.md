# Quick Start

#### Create .env File 
- in root of project and add env variables

  - "OAUTH_CLIENT_ID": "id"
  - "mongoURI": "mongodb://localhost/mongo-test",

#### Install server dependencies

- in root
  - `npm install`

#### Install client dependencies

- cd client
  - `npm install`

#### Run Express from root

- `npm run dev`
-view at: http://localhost:4000/

#### Run Client from /client

- `npm start`
- view at: http://localhost:3000/

#### Deploy to backend to Heroku and code to github

- `git push heroku master && git push origin master`

#### Deploy client to now

- From client run: `now` 