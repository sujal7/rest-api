/**
 * Setup the Database URL
 */

// mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const CLUSTER_HOST = process.env.CLUSTER_HOST;

// Setup the DB URI
exports.DB_URI =
  'mongodb+srv://' +
  DB_USER +
  ':' +
  DB_PASSWORD +
  '@' +
  CLUSTER_HOST +
  '/' +
  DB_NAME +
  '?retryWrites=true&w=majority';
