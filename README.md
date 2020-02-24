# Hasura - Auth0 - React Boilerpalte

Boilerplate application using React, Hasura GraphQL Engine and Auth0.

The application is setup with Apollo client for both queries and subscriptions (websockets). Auth0 is also configured. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to have Node.js installed in your local machine. You can follow the steps from [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04).

### Installing

After making sure Node.js is installed, clone the repository on your local machine. 

Go into the project directory and install all teh dependencies:

```
cd Hasura-Auth0-React-Boilerplate
npm install
```

Make a new file under `src/` named `env.js`

```
export const vars = {
    "GRAPHQL_ENDPOINT": 'https://<YOUR_GRAPHQL_ENDPOINT>',
    "GRAOHQL_REALTIME_ENDPOINT": 'wss://<YOUR_GRAPHQL_ENDPOINT>',
    "DOMAIN": "<YOUR_AUTH0_DOMAIN>"
    "CLIENT_ID": "YOUR_CLIENT_ID_FOR_AUTH0",
    "CALLBACK_URL": "YOUR_CALLBACK_URL"
  }
```

### Auth0 configurations

Make a new application on [Auth0](https://auth0.com/) and make sure you select Single Page Web Application as the application type. 

Add appropriate callback URLs in Allowed Callback URLs and Allowed Web Origins.

Add a new *role* and populate it with the following: 

```
function (user, context, callback) {
  const namespace = "https://hasura.io/jwt/claims";
  context.idToken[namespace] = 
    { 
      'x-hasura-default-role': 'user',
      // do some custom logic to decide allowed roles
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-user-id': user.user_id
    };
  callback(null, user, context);
}
```

And you're done! Run the app using: 

```
yarn start
```
## Deployment

Build the app using `yarn build` and deploy it on Heroku.

## Built With

* [Hasura GraohQL Engine](https://hasura.io/) - Powering the back-end
* [React](https://reactjs.org/) - The front-end JS Library
* [Auth0](https://auth0.com/) - Used for Authentication

## Contributing

All contributions are welcome! :)



