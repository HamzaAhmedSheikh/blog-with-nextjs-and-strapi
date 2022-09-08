module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST", 'ec2-44-210-36-247.compute-1.amazonaws.com'),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "d9bd5hc56lvm5e"),
            user: env("DATABASE_USERNAME", "ejjscbitnqugmc"),
            password: env("DATABASE_PASSWORD", "b339bb5e2e77147ef0dfe3365966e7f029d0145d92f13e9df7972e8b68225749"),
            schema: env("DATABASE_SCHEMA", "public"),
            ssl: { rejectUnauthorized: false },
        },
    }
});