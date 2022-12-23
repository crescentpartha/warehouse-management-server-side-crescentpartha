## Table of Contents

- [Books-Warehouse-Management](#books-warehouse-management)
  - [`Basic Server Setup Steps`](#basic-server-setup-steps)
  - [`Connect to database with secure password on environment variable`](#connect-to-database-with-secure-password-on-environment-variable)
    - [`Copy Paste before Modification`](#copy-paste-before-modification)
    - [`How to get connection string from MongoDB Database`](#how-to-get-connection-string-from-mongodb-database)
    - [`How to get password from MongoDB`](#how-to-get-password-from-mongodb)
  - [`Creating different type of API` (___GET/POST/DELETE/PUT___)](#creating-different-type-of-api-getpostdeleteput)

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