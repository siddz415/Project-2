// sets up a database connection using Sequelize ORM
const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;
// checks for JAWSDB_URL environment variable set
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    // if JAWSDB_URL is not set, it creates a new Sequelize instance with the following connection details
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
        }
    );
}

module.exports = sequelize;
