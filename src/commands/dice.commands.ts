import { Telegraf } from 'telegraf';

export const initDiceCommands = (bot: Telegraf) => {
  bot.command('throwd4', (ctx) => {
    ctx.reply(`${Math.floor(Math.random() * 4) + 1}`);
    ctx.replyWithDice();
  });

  bot.command('throwd20', (ctx) => {
    ctx.reply(`${Math.floor(Math.random() * 20) + 1}`);
    ctx.replyWithDice();
  });
};
