module.exports = {
  development: {
    url:
      "postgres://dlsrtlfb:J2VJt8iqDShnVpkc_TVlKDMC4DWdhm2E@hattie.db.elephantsql.com:5432/dlsrtlfb",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};
