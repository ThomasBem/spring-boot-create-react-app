###Spring-Boot-Create-React-App
[![Build Status](https://travis-ci.org/ThomasBem/spring-boot-create-react-app.svg?branch=master)](https://travis-ci.org/ThomasBem/spring-boot-create-react-app)

__Initial setup of your machine:__

1. [Install Yarn](https://yarnpkg.com/lang/en/docs/install/)
2. Run `yarn global add flow-typed`
3. Install watchman `brew update && brew install watchman`


__Setup project:__

1. Clone the repo with project name: `git clone https://github.com/thomasbem/spring-boot-create-react-app.git <project_name>`
2. `cd <project_name>`
3. Run gradle setup: `./setup.sh`


When adding new modules to package.json, run `flow-typed install`. This fetches flow type definitions for npm modules if they exist.

__Run front-end for development__

1. `cd <project_name>-web`
2. Run `yarn run start` to startup the front-end with a mock back-end using json-server
3. Navigate to localhost:3000

<img src="https://github.com/thomasbem/spring-boot-create-react-app/raw/master/Template.gif" alt="Screenshot of the tool" width="100%">

__Build and run full stack__

1. Run `./gradlew` to build project
2. `cd <project_name>-api/build/libs/`
3. Type `java -jar ` then tab to auto complete to latest version. First time this should be, `java -jar <project_name>-0.0.1-SNAPSHOT.jar` 


__Guide on how to deploy application to Heroku__
1. Create new blank app in Heroku
2. Add .travis.yml to cloned project

```
language: java
jdk:
- oraclejdk8
env:
- NODE_VERSION=6
install:
 - nvm install $NODE_VERSION
 - nvm use $NODE_VERSION
 - curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
 - sudo apt-get install -y nodejs
 - npm install -g yarn
 - wget https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
 - tar -xf heroku-linux-amd64.tar.gz
 - ./heroku/bin/heroku plugins:install heroku-cli-deploy
script:
 - ./gradlew
 - ./heroku/bin/heroku jar:deploy _project-name_-api/build/libs/*.jar --app _heroku-app-name_ HEROKU_API_KEY
```

3. Push to Github and enabled TravisCI building
4. Add HEROKU_API_KEY environment variable to Travis with your HEROKU_API_TOKEN (Can be found in Heroku or using Heroku cli - `heroku auth:token)`

Now go have fun!

