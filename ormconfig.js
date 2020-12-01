const process = require('process');

const username = process.env.POSTGRES_USER || "postgres";
const password = process.env.POSTGRES_PASSWORD || "example";
const host = process.env.POSTGRES_HOST || "localhost";
const database = process.env.POSTGRES_DATABASE || "postgres";

module.exports = {
    "type": "postgres",
    host,
    "port": 5432,
    username, password,
    database,
    "synchronize": true,
    "dropSchema": false,
    "logging": true,
    "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
    "migrations": ["migrations/**/*.ts"],
    "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
    "cli": {
        "entitiesDir": "src",
        "migrationsDir": "migrations",
        "subscribersDir": "subscriber"
    }
}