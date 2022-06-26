# api-server

> Author: Andrew Schiller

> ## Problem Domain

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard. Refactor router handlers into a collection interface.

> ## Getting Started

> ### Standard dependencies

- express, dotenv, supertest, jest, eslint

> ### SQL-specific dependencies

- sequelize, sequelize-cli, pg, sqlite3

> ### >>> **Important setup** <<<

- To enable a test environment, go into the `package.json` file and insert `NODE_ENV=test ` at the start of the `test` value (in front of `jest --verbose --coverage`), which is in `scripts`.

> ## Links

- [GitHub pull request](https://github.com/schillerandrew/api-server/pull/1)
- [GitHub actions](https://github.com/schillerandrew/api-server/actions)
- [Heroku app](https://schiller-lab3-api-server.herokuapp.com/)

> ## Architecture

- **runtime:** Node
- **server:** Express
- **database:** PostgreSQL
- **deployment:** Heroku
