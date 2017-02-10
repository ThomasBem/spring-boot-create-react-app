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

Now go have fun!

