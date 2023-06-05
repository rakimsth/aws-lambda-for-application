const env = {
  username: process.env.USERNAME || "postgres",
  password: process.env.PASSWORD || "password",
  database: process.env.DATABASE || "auth_demo",
  host: process.env.HOST || "localhost",
  dialect: "postgres",
};

module.exports = env;
