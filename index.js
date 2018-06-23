const Telegraf = require("telegraf"); // Dependencies
const Express = require("express");

const config = require("./modules/config"); // Local Dependencies
const helper = require("./modules/helper");

const bot = new Telegraf(config.token, config.telegraf); // Telegraf init
const app = Express(); // Express init

bot.use(Telegraf.log());

bot.start(ctx => {
  ctx.reply("Welcome!");
});

bot.on("text", ctx => {
  ctx.reply(
    `You can try pic search typing @${
      config.telegraf.username
    } and your request :)`
  );
});

bot.on("inline_query", ctx => {
  let query = ctx.update.inline_query.query.toLowerCase();

  if (query === "") {
    helper.searchReq().then(formated => {
      ctx.answerInlineQuery(formated);
    });
  } else {
    helper.searchReq(query).then(formated => {
      ctx.answerInlineQuery(formated);
    });
  }
});

bot.telegram.setWebhook(`${config.url}/bot`);
app.use(bot.webhookCallback("/bot"));
app.get("/", (req, res) => res.sendStatus(200));
app.listen(config.port, () => console.log(".::Bot Started::."));
