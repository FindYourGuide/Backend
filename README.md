# Project Title

FindYourGuide: Your One-Stop Shop for Counseling Appointments

# Description

FindYourGuide is a web or mobile application that simplifies appointment scheduling for both counselors and clients (counselees). It caters to a wide range of counseling needs, allowing counselors to manage their schedules and clients to conveniently book appointments with the right counselor.

## Target Audience

- Counselors of all specializations (e.g., career, life coaching, relationship, legal)
- Clients seeking counseling services in various areas

# Key Features
## Counselors:

- Register with FindYourGuide to showcase their expertise
- Set daily or weekly appointment slots based on their availability
- Manage their calendar and bookings in one place

## Clients:

- View counselors' schedules and available slots in real-time
- Reserve appointments for specific times


## Run Locally

Clone the project

```bash
  git clone https://github.com/FindYourGuide/Backend.git
```

Go to the project directory

```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URL`

`JWT_SECRET`

`PRIVATE_CODE`

#### To run locally, the value of these variable will be

```javascript
PORT=8080
MONGO_URL="mongodb://localhost:27017/Appointment"
JWT_SECRET=Your secret code
PRIVATE_CODE=Your code for admin registration
```

# Authentication mechanism
## Auth Mddleware

```javascript
const { User } = require('../models')
const { responseMessage, verifyToken } = require('../helpers')


async function AuthMiddleware(req, res, next) {
  const token = req.header('auth-token');
  if (!token) {
    return responseMessage(res, 401, "Unauthorized");
  }

  try {

    const decoded = verifyToken(token)
    req.user = await User.findById(decoded.id)

    if (!req.user) {
      return responseMessage(res, 401, "User not found");
    }
    next();
  } catch (error) {
    return responseMessage(res, 401, "Unauthorized");
  }
}

module.exports = AuthMiddleware;
```

#### The provided code implements a middleware function for authentication using JSON Web Tokens (JWT) in a Node.js application. Here's a breakdown of the authentication mechanism:

### 1. Token Extraction:

The function retrieves the authorization token from the request header named auth-token.

### 2. Token Validation:

If a token exists, the verifyToken function (assumed to be a helper function) attempts to decode the token using a secret key. This validation ensures the token's integrity and authenticity.

### 3. User Retrieval:

If the token is valid, the decoded payload (containing the user's ID) is used to fetch the corresponding user data from the User model using Mongoose's findById method.

### 4. User Verification:

If a user is found with the ID from the decoded token, it indicates a valid and authorized user.

### 5. Authorization:

If the token is invalid or the user is not found, the middleware sends an error response with a 401 (Unauthorized) status code.
If the token is valid and the user is found, the next() function is called, allowing the request to proceed to the intended route or controller.

## Helper functions

```javascript

function createToken(payload) {
  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

```

used to create and verify jwt token


# Api Documentation

[Api Documentation](https://documenter.getpostman.com/view/28469978/2sA3QnjExp)




