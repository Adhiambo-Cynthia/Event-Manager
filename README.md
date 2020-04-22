# Event manager App
## Features
### The user should be able to:
1. Create and post a new event and its details
2. Navigate to a created event
3. Edit an event
4. Delete a specific Event
5. View a list of all events
## Pre-requisites:
### Vue CLI
### Vue Router
### Vuex
### API calls with Axios
### Vue components

## Project setup
```
npm install
```
This will install all the dependancies used in the Project
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Dependancies
### Axios
#### Used to make API calls to our mock Server.
```
npm install axios
```
#### Making the API call
```
import axios from 'axios'
```
Learn more on the [Axios library](https://www.npmjs.com/package/axios)
### Vuex
```
npm install vuex
```
### Lodash
#### When we are doing automatic global registration, we'll need to install lodash inorder to convert our global component's names to camelCase.
```
npm install lodash
```
### NProgress
#### As each Page loads,to let users know the data is on the way when they click a link that requires an API call or navigates to another route, we have to install a progress Bar to show the loading levels.To install,
```
npm install nprogress
```
#### To use it, we import it in the main.js file
```
import 'nprogress/nprogress.css'
```
### Vuelidate
#### Use this for form validation.To install, run
```
npm install vuelidate --save
```
#### Then head to our main.js file, and import vuelidate here and tell Vue to use it
```
import Vuelidate from 'vuelidate'
    
    Vue.use(Vuelidate)
```
### Vue-router
```
npm install vue-router
```
#### We use it in the index.js of the router folder
```
import VueRouter from 'vue-router'

    Vue.use(VueRouter)
```
## Other libraries used
### Json-Server
#### Helped in creating a mock server for making our API calls. To install,
```
npm install -g json-server
```
#### We then turn on json-server and tells it to watch our db.json file, which is our mock database.
```
json-server --watch db.json
```

