A Nodejs Express backend REST API for subscription checking.

Allows to create users, sign in, add subscription, get their renewal dates. All the routes are protected with jwt. 

API Endpoints:

# To create a user
POST request to https://subscription-express-server.onrender.com/api/v1/auth/sign-up/ with data name, email and password.

example: 
{
    "name": "Test",
    "email": "test@123.com",
    "password": "password"
}

# To Sign in
Post request to https://subscription-express-server.onrender.com/api/v1/auth/sign-in/ with email and password.

example: 
{
    "email": "test@123.com",
    "password": "password"
}

# To get your details
Sign in and get your userid and token. Then GET request to https://subscription-express-server.onrender.com/api/v1/users/youruserid and pass your bearer token as well.

example: 
{
    "email": "test@123.com",
    "password": "password"
}

# To create a subscription
POST request to  https://subscription-express-server.onrender.com/api/v1/subscriptions and pass the data as shown in example. Pass your bearer token as well.

 {
    "name": "Netflix",
    "price": 19.99,
    "frequency": "monthly",
    "startDate": "2025-02-01T00:00:00.000Z"
}

# To get your subscriptions
GET request to  https://subscription-express-server.onrender.com/api/v1/subscriptions/user/youruserid along with your bearer token.

