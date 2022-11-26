## Table of Contents

- [Books-Warehouse-Management](#books-warehouse-management)
  - [`Basic Server Setup Steps`](#basic-server-setup-steps)
  - [`Connect to database with secure password on environment variable`](#connect-to-database-with-secure-password-on-environment-variable)
    - [`Copy Paste before Modification`](#copy-paste-before-modification)
    - [`How to get connection string from MongoDB Database`](#how-to-get-connection-string-from-mongodb-database)
    - [`How to get password from MongoDB`](#how-to-get-password-from-mongodb)

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