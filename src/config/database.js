require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: null,
  database: process.env.DB_NAME,
  dialect: 'sqlite',
  storage: './__tests__/database.sqlite',
  operatorsAliases: 'false',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
