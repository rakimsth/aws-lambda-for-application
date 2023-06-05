## Installation

- Create database named `auth_demo` inside your Postgres server
- Run yarn and yarn start to get started

## ENV CONFIG

- Check the `config` folder inside the `src` folder
- Update `env.js` with your env information
- If you need to change database connection, change at `db.config.js`

## Route test

1.  Once the app is running, You can check the multiple routes

2.  Sign up using, `POST` Method on route `/api/v1/auth/signup` with payload :

```json
{
  "username": "",
  "email": "",
  "password": "",
  "roles": ["admin"] // optional
}
```

`NOTE:`

- Pass role payload to override the default role(user)
- Roles are ["admin", "user", "moderator"]
- You can pass multiple roles in the array.

3. Sign in using, `POST` Method on route `/api/v1/auth/signin` with payload :

```json
{
  "username": "",
  "password": ""
}
```

4. Check the open Route which is publicly accessible to all using, `GET` Method on the route `/api/v1/users/open`

5. Check the Protected Route which is only accessible to authorized Users using, `GET` Method on the route `/api/v1/users/user`.

```json
{
  "x-access-token": ""
}
```

`NOTE:` Pass the `x-access-token` in request headers after sign in.

6. Check all other routes in the routes directory.

<br> 
<p>🚀🚀 HAPPY CODING!!🚀🚀</p>
<br>

# Get Started with Serverless Application (LAMBDA)

1. Make sure to create separate App function

- App.js (runs the Application)
- Server.js (run the App.js)

2. This is to ensure that the app port will be provided by AWS during serverless deploy and express app on local deployment

3. Create serverless setup

- `npm i -g serverless` to setup the global serverless configuration
- Create default or named AWS_PROFILE by using the following command:

```sh
serverless config credentials --provider aws --profile <profile-name> --key <aws-key-with-cloudformation-role> --secret <aws-secret>
```

- In terminal, export the named AWS_PROFILE if you have created the AWS_PROFILE by

```sh
export AWS_PROFILE=<aws-profile-name>
```

- run the following command to start the serverless setup in project

```sh
 serverless create -t aws-nodejs -n userAuthser
```

`NOTE:` You can select multiple template such as docker template, python template etc. Learn More at this [Link](https://www.serverless.com/framework/docs)

- Make sure to update the .env file, as we are configuring our serverless.yml file using .env file.

- Now, run `yarn run deploy` to deploy the API Application to the Lambda

- Check the Serverless Information using the following command to get the API URLs

```sh
serverless info
```

- Incase of API Update, run the following command again to redeploy the changes.

```sh
serverless deploy
```

- If you want to remove the serverless functions/application, use the following command:

```sh
serverless remove <service-name>
```
