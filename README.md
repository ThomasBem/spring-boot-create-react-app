###Spring-Boot-Create-React-App

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

Now go have fun!

