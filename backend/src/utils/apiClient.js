const axios = require("axios");

const apiClient = axios.create({
  baseURL: process.env.BASE_URL
});

module.exports = apiClient;