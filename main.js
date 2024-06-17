import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';

const token = '7051712068:AAEhEPsEZILyBmn0OBqY0m8RmN1rJc5GmtI';
const webAppUrl = 'https://angular-tg-app-15d3c.web.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
    ])
  );
});

bot.on(message('web_app_data'), async (ctx) => {
  const data = ctx.webAppData.data.json();
  ctx.reply(`your message: ${data?.feedback}` ?? 'empty message');
});

bot.launch();
