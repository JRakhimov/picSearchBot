# PicSearchBot

Telegram bot for inline photo searching :)

## How to use

First of all, you need start chating with your bot. Type or click 'Start' button and then you can search pictures in inline mode typing ```yourBotUserName + ' ' + yourQuery```

## Installation

### First things first...

You will need to generate a Telegram bot API key and that it's easy, just follow [this](https://core.telegram.org/bots#3-how-do-i-create-a-bot) step-by-step.

### Now the environment part...

Install npm and Node.js on your machine, open a terminal then navigate to the folder where you want your project to be then run this command:

```bash
git clone https://github.com/JRakhimov/picSearchBot.git
```

You should see something like this:

```bash
Cloning into 'picSearchBot'...
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), done.
```

## Installing

Just run the following command at your root project folder:

```bash
npm install
```

Now it is a good time to create your environment variables file to save the API keys that was granted to you by BotFather. To create the file just run still at the root project folder:

```bash
touch .env
```

Once the file is created, just open it and past the following environment variables with their respective values that you own, just remember that those keys are related to you and must not be shared with anyone else, remember to always have this file in your .gitignore so that way you do not push it accidentally. Your .env file must be something like this:

```js
BOT_TOKEN = "123456789:ABC_****"; // Your telegram bot token
PORT = 1234; // Port for your webhook server. P.s. Telegram supports only ports: 443, 80, 88, 8443, 3000
URL = "https://your.domain"; // Pay attention that your server must have SSL certificate and provide https connection!
BOT_NAME = "userNameOfBot"; // Without "@"
CUSTOM_SEARCH_KEY = "yourKeyProvidedByGoogle" // https://goo.gl/WNVsqi - Good insturction in Russian
CX = "yourCXKey" // http://www.google.com/cse/manage/all - Here you can find your CX ID
```

## Running

After all of this setting up, just run your bot with:

```bash
npm run start
```

All of your bot's requests will be logged in your terminal.
