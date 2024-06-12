# Cats API

Welcome to the Cats API, a simple API built with NestJS that allows you to manage a collection of cats. This project is designed to help you get started with NestJS and provides basic CRUD operations for managing cats.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Create a new cat
- Retrieve a list of cats
- Retrieve a single cat by ID
- Update a cat's information
- Delete a cat

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 12.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/missShevel/catsAPI.git
   cd cats
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or if you are using yarn:

   ```bash
   yarn install
   ```

## Running the App

1. Start the development server:

   ```bash
   npm run start:dev
   ```

   or if you are using yarn:

   ```bash
   yarn start:dev
   ```

2. The app will be running at `http://localhost:3000`.
3. Start local DB using docker-compose (you need Docker to be instaled on your machine)

    ```bash
   docker-compose up
   ```

## API Endpoints

### Create a new cat

- **URL:** `/cats`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "name": "string",
    "color": "string",
    "birthDate": "Date"
  }
  ```

- **Response:**

  ```json
  {
    "id": "number",
    "name": "string",
    "color": "string",
    "birthDate": "Date",
    "createdAt": "Date",
    "updatedAt": "Date",
  }
  ```

### Retrieve a list of cats

- **URL:** `/cats`
- **Method:** `GET`
- **Response:**

  ```json
  [
  {
    "id": "number",
    "name": "string",
    "color": "string",
    "birthDate": "Date",
    "createdAt": "Date",
    "updatedAt": "Date",
  }
  ]
  ```

### Retrieve a single cat by ID

- **URL:** `/cats/:id`
- **Method:** `GET`
- **Response:**

  ```json
  {
    "id": "number",
    "name": "string",
    "color": "string",
    "birthDate": "Date",
    "createdAt": "Date",
    "updatedAt": "Date",
  }
  ```

### Update a cat's information

- **URL:** `/cats/:id`
- **Method:** `PUT`
- **Request Body:**

  ```json
  {
    "name": "string",
    "color": "string",
    "birthDate": "Date"
  }
  ```

- **Response:**

  ```json
  {
    "id": "number",
    "name": "string",
    "color": "string",
    "birthDate": "Date",
    "createdAt": "Date",
    "updatedAt": "Date",
  }
  ```

### Delete a cat

- **URL:** `/cats/:id`
- **Method:** `DELETE`
- **Response:** `204 No Content`


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.