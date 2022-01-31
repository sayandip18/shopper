# Shopper

To run the front-end:

```
git clone git@github.com:sayandip18/shopper.git
cd shopper
npm install
npm start
```

To run the backend:

```
json-server-auth ./db.json --port 3001
```

If the backend is not running in Node command prompt, open Git cmd to run it.

Once the backend is up and running, open Thunder Client or Hoppscotch or any API testing service to perform a POST request to ` http://localhost:3001/login` endpoint provided by `json-server-auth`
with json data of the following format, for example,

```
{
  "email": "regular@example.com",
  "password": "password"
}
```

The request will return a JWT valid for 1 hour, which confirms the request was successful.
Now, the user can use the following credentials to login. Else, the user will get an error.

## Technologies used

1. React
2. Bulma

## What I learnt doing this project

1. Using Context API to manage states efficiently
2. Bulma CSS
3. Generating a fake backend API with `json-server`
4. What JWT is and how it can be used for authentication

## Scopes to improve the user experience

1. Make the shopping cart design a drawer component.
2. Diversifying the product items into several categories.
3. Make the products searchable (one may use speech-to-text API for this too)
