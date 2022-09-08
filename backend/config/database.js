module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "d9bd5hc56lvm5e"),
            user: env("DATABASE_USERNAME", "ejjscbitnqugmc"),
            password: env("DATABASE_PASSWORD"),
            schema: env("DATABASE_SCHEMA", "public"),
            ssl: { rejectUnauthorized: false },
        },
    }
});