import { Telegraf, Input } from 'telegraf';
import { creatures } from '../data/creatures';
import { getRandomFromList, stringifyCreature } from '../utils';
import { StringifyType } from '../types';
import { join } from 'path';

export const initCreaturesCommands = (bot: Telegraf) => {
  bot.command('get_random_creature', (ctx) => {
    const randomCreature = getRandomFromList(creatures);
    ctx.reply(stringifyCreature(randomCreature, StringifyType.Long));
    ctx.replyWithPhoto(
      Input.fromLocalFile(
        join(
          __dirname,
          `../assets/images/creatures/${randomCreature.name}.jpg`,
        ),
      ),
    );
  });
  bot.command('get_random_common_creature', (ctx) => {
    const commonCreatures = creatures.filter(
      (creature) => creature.level === 1,
    );
    const randomCommonCreature = getRandomFromList(commonCreatures);
    ctx.reply(stringifyCreature(randomCommonCreature, StringifyType.Long));
    ctx.replyWithPhoto(
      Input.fromLocalFile(
        join(
          __dirname,
          `../assets/images/creatures/${randomCommonCreature.name}.jpg`,
        ),
      ),
    );
  });
  bot.command('get_random_rare_creature', (ctx) => {
    const rareCreatures = creatures.filter((creature) => creature.level === 2);
    const randomRareCreature = getRandomFromList(rareCreatures);
    ctx.reply(stringifyCreature(randomRareCreature, StringifyType.Long));
    ctx.replyWithPhoto(
      Input.fromLocalFile(
        join(
          __dirname,
          `../assets/images/creatures/${randomRareCreature.name}.jpg`,
        ),
      ),
    );
  });
  bot.command('get_random_legendary_creature', (ctx) => {
    const legendaryCreatures = creatures.filter(
      (creature) => creature.level === 3,
    );
    const randomLegendaryCreature = getRandomFromList(legendaryCreatures);
    ctx.reply(stringifyCreature(randomLegendaryCreature, StringifyType.Long));
    ctx.replyWithPhoto(
      Input.fromLocalFile(
        join(
          __dirname,
          `../assets/images/creatures/${randomLegendaryCreature.name}.jpg`,
        ),
      ),
    );
  });
};
