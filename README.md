# GameGo

> A video game ecommerce hub.

## Related Projects

  - https://github.com/Legolas-SDC/Carousel-Images
  - https://github.com/Legolas-SDC/Product-Description
  <!-- - https://github.com/Team-Aragorn/Recommended-Services -->
  - https://github.com/Legolas-SDC/reviews
  - https://github.com/Team-Aragorn/addToCart-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [How to Start](#how-to-start)
1. [REST API Docs](#rest-api)
  i. Games
    * [POST](#add-a-new-game)
    * [GET](#get-a-game-by-gameid)
    * [PUT](#update-a-game-by-gameid)
    * [DELETE](#delete-a-game-by-gameid)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

You will also need to install and setup mongodb for this app.

You will also need to seed your database, to seed the DB open a terminal in the addToCart-service directory and run the following command:
- npm run-script seed
After you get a message saying it has connect to MongoDB press CTRL + C. Your data should be in the DB now.


## How to Start
cd to addToCart-service directory
in multiple terminals run the following commands, one command per terminal:
- (sudo) mongo OR (sudo) mongod
- npm run-script build
- npm start

# REST API
The REST API for this service is outlined below.

## Add a New Game
### Request
`POST /cartapi/`

Expects a JSON object in the request body with the following properties:

    {
      "id": Integer, // Example => 101
      "gameId": Integer, // 101
      "title": String, // "Public-key initiatives"
      "publisher": String, // "Hilll LLC"
      "reviewScore": Integer, // 3
      "reviewCount": Integer, // 4735
      "ageRating": String, // "4"
      "newPrice": Number, // 60
      "usedPrice": Number, // 18
      "digitalPrice": Number, // 48
      "storeLocation": String, // "813 Lynch Hollow Destany Drive South Maeganfurt, Kentucky"
      "inStock": Boolean // true
    }

### Response
    HTTP/1.1 201 Created
    Date: Thu, 21 May 2020 02:29:34 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 310
    ETag: W/"136-3G2NH4MSSKxb/nLmu0EV8juhwUk"
    X-Powered-By: Express

    {
      "_id": "5ec5e78e7fcb897d49bcbc58",
      "id": 101,
      "gameId": 101,
      "title": "Public-key initiatives",
      "publisher": "Hilll LLC",
      "reviewScore": 3,
      "reviewCount": 4735,
      "ageRating": "4",
      "newPrice": 60,
      "usedPrice": 18,
      "digitalPrice": 48,
      "storeLocation": "813 Lynch Hollow Destany Drive South Maeganfurt, Kentucky",
      "inStock": true,
      "__v": 0
    }

## Get a Game by gameId
### Request
`GET /cartapi/{gameId}`

### Response
    HTTP/1.1 200 OK
    Date: Thu, 21 May 2020 01:56:44 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 308
    ETag: W/"134-uIy9RPQMPisaGHLs3nozAHr5dVE"
    X-Powered-By: Express

    [
      {
        "_id": "5ec4684e79c2784962f59581",
        "id": 1,
        "gameId": 1,
        "title": "Public-key initiatives",
        "publisher": "Hilll LLC",
        "reviewScore": 3,
        "reviewCount": 4735,
        "ageRating": "4",
        "newPrice": 60,
        "usedPrice": 18,
        "digitalPrice": 48,
        "storeLocation": "813 Lynch Hollow Destany Drive South Maeganfurt, Kentucky",
        "inStock": true,
        "__v": 0
      }
    ]

## Update a Game by gameId
### Request
`PUT /cartapi/{gameId}`

Expects a JSON object as the request body with any properties that should be updated on game {gameId}.

    {
      "title": String, // Example => "New Game Title"
      "newPrice": Number, // 73
      "usedPrice": Number, // 25
      "digitalPrice": Number, // 56
      "inStock": Boolean // false
    }

### Response
    HTTP/1.1 200 OK
    Date: Thu, 21 May 2020 02:38:19 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 28
    ETag: W/"1c-9CSp0YZbwVi1S/g+0CyT4pOh1+k"
    X-Powered-By: Express

    {
      "n": 1, // Number of matching records found
      "nModified": 1, // Number of records updated
      "ok": 1
    }

## Delete a Game by gameId
### Request
`DELETE /cartapi/{gameId}`

### Response
    HTTP/1.1 200 OK
    Date: Thu, 21 May 2020 02:40:38 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    ETag: W/"1f-W+nAuB2WoFfXCJf017kGogymC54"
    X-Powered-By: Express

    {
      "n": 1, // Number of matching records found
      "ok": 1,
      "deletedCount": 1 // Number of records deleted
    }
