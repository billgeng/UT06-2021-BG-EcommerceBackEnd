# E-commerce Back End

## Description

User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

The walkthrough video link : https://youtu.be/zD7MfmdJRd4

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

The user should clone the repository from GitHub.
This application requires Node.js, Express.js, and Sequelize.
To connect to the database run mysql -u root -p and enter password from .env file.
Then source the schema.sql. To seed the file run npm run seed.
Finally to connect to the server run npm start.

## Usage

npm init, npm run start

![alt text](./assets/images/Screenshot-proreadme.png)

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

N/A

## Contributing

N/A

## Tests

jest

## License

    This project is license under the MIT license.

![License:MIT](https://img.shields.io/badge/License-MIT-brightgreen)

If you have any question about license ,please visit to https://opensource.org/licenses/MIT.

## Questions

If you have any questions ,please check the link : https://github.com/billgeng/UT06-2021-BG-Challenge9

If you have any additional questions , please Email to me by billgeng@yahoo.com.
