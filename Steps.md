## Table of Contents

- [Books-Warehouse-Management](#books-warehouse-management)
  - [`Basic Server Setup Steps`](#basic-server-setup-steps)
  - [`Connect to database with secure password on environment variable`](#connect-to-database-with-secure-password-on-environment-variable)
    - [`Copy Paste before Modification`](#copy-paste-before-modification)
    - [`How to get connection string from MongoDB Database`](#how-to-get-connection-string-from-mongodb-database)
    - [`How to get password from MongoDB`](#how-to-get-password-from-mongodb)
  - [`Creating different type of API` (___GET/POST/DELETE/PUT___)](#creating-different-type-of-api-getpostdeleteput)
  - [`Server Deploy on Vercel`](#server-deploy-on-vercel)
    - [`Resources`](#resources)
    - [`How to deploy Express API without using vercel CLI`](#how-to-deploy-express-api-without-using-vercel-cli)

# Books-Warehouse-Management

## `Basic Server Setup Steps`

- [Basic Server Setup Steps](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#basic-server-setup-steps)

**[🔼Back to Top](#table-of-contents)**

## `Connect to database with secure password on environment variable`

- [Create mongodb atlas account and Connect to database](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module65-Mongodb-Database-integration-CRUD/00mongodb-database_integration-CRUD.md#652-create-mongodb-atlas-account-and-connect-to-database)
- [Connect to database with secure password on environment variable](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#connect-to-database-with-secure-password-on-environment-variable)

**[🔼Back to Top](#table-of-contents)**

### `Copy Paste before Modification`

``` JavaScript
// In index.js

// Username: dbuser1
// Password: 6B0TvhL6jSKNxzhp

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbuser1:<password>@cluster0.tgnb0dt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

**[🔼Back to Top](#table-of-contents)**

### `How to get connection string from MongoDB Database`

- ___Database___ > ___Connect___ (from ___Cluster0___)> Connect your application > Include full driver code example (___Selected___ to get full Code) > ___Copy & Paste___ in index.js

``` JavaScript
// In index.js
// connection setup with database with secure password on environment variable
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tgnb0dt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
//   const collection = client.db("test").collection("devices");
  const collection = client.db("crudBookManagement").collection("book");
  console.log('crudBookManagement database connected');
  // perform actions on the collection object
  client.close();
});
```

**[🔼Back to Top](#table-of-contents)**

### `How to get password from MongoDB`

- ___Database Access___ > Edit (password) or ___ADD NEW DATABASE USER___ > Username (___geniusUser___) > Autogenerate password (___WfRnZQmYC5To03nC___) > Copy & Paste in `.env` file > get Username & Password by `${process.env.DB_USER}` and `${process.env.DB_PASS}` format

``` JavaScript
// In .env
DB_USER=dbuser1
DB_PASS=6B0TvhL6jSKNxzhp
```

**[🔼Back to Top](#table-of-contents)**

## `Creating different type of API` (___GET/POST/DELETE/PUT___)

- [Load all products from database by creating a product API of get method](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#load-all-products-from-database-by-creating-a-product-api-of-get-method)
- [Insert a Product data to the MongoDb Cloud Database](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#insert-a-product-data-to-the-mongodb-cloud-database)
- [Manage Products and Explore DELETE API](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#manage-products-and-explore-delete-api)
- Load a particular book data from database to server-side (id-wise)
  - [Get a particular event from database and Create a GET API to get a particular event (id-wise)](https://github.com/crescentpartha/Volunteer-Network-Server/blob/main/Steps.md#get-a-particular-event-from-database-and-create-a-get-api-to-get-a-particular-event-id-wise)
  - [Load single product data by using id and Setup form's field value](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#load-single-product-data-by-using-id-and-setup-forms-field-value)
  - [Setup Dynamic Route and Access route params](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/00module-overview-and-react-review.md#612-setup-dynamic-route-and-access-route-params)
- [Update a single product info according to id](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#update-a-single-product-info-according-to-id)
- Insert ordered book data from client-side to server-side to database
  - [Insert a Product data to the MongoDb Cloud Database](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#insert-a-product-data-to-the-mongodb-cloud-database)
  - [ItemDetail.js](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/Home/InventoryItems/ItemDetail/ItemDetail.js)
- [Load all products from database by creating a product API of get method](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#load-all-products-from-database-by-creating-a-product-api-of-get-method)
- [Load single product data by using id and Setup form's field value](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#load-single-product-data-by-using-id-and-setup-forms-field-value)
- Update existing ordered book data from client-side to server-side to database for orderCollection
  - Create a Custom hooks with dependency to load all orders book data from orderCollection (`useOrders.js`)
  - Create a Custom hooks with dependency to load a particular orders book data from orderCollection (`useLoadSingleOrderedBookItem.js`)
  - [Update a single product info according to id](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#update-a-single-product-info-according-to-id)
  - [ItemDetail.js](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/Home/InventoryItems/ItemDetail/ItemDetail.js)
- Load a particular ordered book data from database to server-side | (email-wise data load) for orderCollection
  - [index.js](https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-crescentpartha/blob/main/index.js)
- DELETE a Particular ordered book data from server-side to database for orderCollection
- Implement Pagination
  - [67.4 Introduction to pagination and pagination concept](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module48-simple-react-SPA-with-simple-E-commerce/02ema-john-simple.md#674-introduction-to-pagination-and-pagination-concept)
    - [Pagination and Load Data by filter](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module48-simple-react-SPA-with-simple-E-commerce/02ema-john-simple.md#module-67-pagination-and-load-data-by-filter)
  - [67.5 get page count and Create pagination button](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module48-simple-react-SPA-with-simple-E-commerce/02ema-john-simple.md#675-interesting-get-page-count-and-create-pagination-button)
    - [product count: How many products have in the database (Fix deprecatedWarning)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module48-simple-react-SPA-with-simple-E-commerce/02ema-john-simple.md#modified-code-product-count-how-many-products-have-in-the-database-fix-deprecatedwarning)
  - [67.6 Set Page and Size state and send search query to server](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module48-simple-react-SPA-with-simple-E-commerce/02ema-john-simple.md#676-set-page-and-size-state-and-send-search-query-to-server)
  - [67.7 Load data based on the page number and size (no of products)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module48-simple-react-SPA-with-simple-E-commerce/02ema-john-simple.md#677-interesting-load-data-based-on-the-page-number-and-size-no-of-products)
- Implement JsonWebToken (JWT)
  - [68.3 Install Axios (in client-side)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/00module-overview-and-react-review.md#install-axios-in-client-side)
  - [68.5 Introduction JWT token](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/00module-overview-and-react-review.md#json-web-tokens-jwt--jsonwebtoken---introduction)
    - [Install JWT (in server-side)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/00module-overview-and-react-review.md#install-jwt)
  - [68.6 Create JWT Token, Get jwt token on client-side](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/00module-overview-and-react-review.md#686-advanced-create-jwt-token-get-jwt-token-on-client-side)
  - [68.7 Send jwt token in the server, verify and decode jwt token](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/00module-overview-and-react-review.md#687-advanced-send-jwt-token-in-the-server-verify-and-decode-jwt-token)
    - Modify `useLoadEmailOrderedBooks.js`

**[🔼Back to Top](#table-of-contents)**

## `Server Deploy on Vercel`

### `Resources`

1. [Deploy an Express API on Vercel (using Vercel CLI & without using CLI)](https://fahimahammed-cse.medium.com/deploy-an-express-api-on-vercel-eebc13ace629)
2. [How to deploy a Node/Express server using Vercel CLI](https://medium.com/@shafiarahmanchy13/how-to-deploy-a-node-express-server-using-vercel-cli-f0a464d4e88c)
3. [How to Deploy node and express JS server on Vercel | Bangla](https://www.youtube.com/watch?v=hiZy1enqIyg)
4. [Free deploy node express js app on vercel | Bangla](https://www.youtube.com/watch?v=ICPG5VdJmvY)

**[🔼Back to Top](#table-of-contents)**

### `How to deploy Express API without using vercel CLI`

1. [Sign-Up](https://vercel.com/signup) or [Login](https://vercel.com/login) using GitHub on [Vercel.com](https://vercel.com/)
2. Create `vercel.json` file in the ___root___ of ___server-side repository___

``` JSON
// In vercel.json

{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
```
3. Add ___node engines___ in the `package.json` file of ___server-side repository___

``` JSON
// In package.json (Add those lines of code)

"engines": {
  "node": "16.x"
},
```

``` JSON
// In package.json (Full Example)
{
  "name": "warehouse-management-server-side-crescentpartha",
  "version": "1.0.0",
  "description": "\"# warehouse-management-server-side-crescentpartha\"",
  "main": "index.js",
  "engines": {
    "node": "16.x"
  },
  "scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  .
  .
  .
  .

  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongodb": "^4.12.1"
  }
}
```
4. Remove `await` ___keyword___ from `await client.connect();` inside of `index.js` file on ___server-side repository___.
     - Otherwise, can't get other ___routes data___ like `/book` or `/order`.

``` JavaScript
// In index.js

// await client.connect();
client.connect();
```
5. `Push` your all modification on GitHub so that ___server-side repo___ keep ___up-to-date___ before deployment.
6. Go to ___dashboard___ > clicked on ___add new project___ > ___import___ your project > give ___project-name___ > set all ___environment-variables___ > ___Deploy___
7. ___Copy___ `DOMAINS URL` and ___replace___ `localhost:3000` on ___Client-side___.
     - `Ctrl + Shift + F` > Search on every files.
     - Type `https://localhost:3000/`
     - Replace by `https://books-warehouse-management-server-side-crescentpartha.vercel.app/`

``` JavaScript
// Replace localhost by Domains URL on Client-Side

https://localhost:3000/login > https://books-warehouse-management-server-side-crescentpartha.vercel.app/login
```
8. Check ___everything works___ fine or not, then ___pull___ all modification on ___remote repository___.

**[🔼Back to Top](#table-of-contents)**