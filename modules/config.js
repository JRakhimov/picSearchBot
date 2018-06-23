"use strict";

require("dotenv").config();

const config = {
  token: process.env.BOT_TOKEN,
  port: process.env.PORT,
  url: process.env.URL,
  customSearchKey: process.env.CUSTOM_SEARCH_KEY, // https://goo.gl/WNVsqi - How to get these keys
  cx: process.env.CX,
  searchUrl: "https://www.googleapis.com/customsearch/v1",
  telegraf: {
    telegram: {
      webhookReply: false // False because in webhookReply mode telegram doesn't return context
    },
    username: process.env.BOT_NAME
  }
};

module.exports = config;
