import { Telegraf } from 'telegraf';
import { allItems, usableItems } from '../data/items';
import { getRandomFromList, stringifyArtifact, stringifyItem } from '../utils';
import { artifacts } from '../data/artifacts';
import { StringifyType } from '../types';

export const initItemsCommands = (bot: Telegraf) => {
  bot.command('open_market', (ctx) => {
    let market = '';
    for (let i = 0; i < 19; i++) {
      const randomItem = getRandomFromList(usableItems);
      market += stringifyItem(randomItem, StringifyType.Short);
    }
    const randomArtifact = getRandomFromList(artifacts);
    market += stringifyArtifact(randomArtifact, StringifyType.Short);
    ctx.reply(market);
  });
  bot.command('get_common_loot', (ctx) => {
    let loot = '';
    for (let i = 0; i < 2; i++) {
      const randomItem = getRandomFromList(allItems);
      loot += stringifyItem(randomItem, StringifyType.Short);
    }
    ctx.reply(loot);
  });
  bot.command('get_rare_loot', (ctx) => {
    let loot = '';
    for (let i = 0; i < 3; i++) {
      const randomItem = getRandomFromList(allItems);
      loot += stringifyItem(randomItem, StringifyType.Short);
    }
    ctx.reply(loot);
  });
  bot.command('get_legend_loot', (ctx) => {
    let loot = '';
    for (let i = 0; i < 5; i++) {
      const randomItem = getRandomFromList(allItems);
      loot += stringifyItem(randomItem, StringifyType.Short);
    }
    const randomArtifact = getRandomFromList(artifacts);
    loot += stringifyArtifact(randomArtifact, StringifyType.Short);
    ctx.reply(loot);
  });
};
