import { Input, Telegraf } from 'telegraf';
import { getRandomFromList, stringifyCharacter } from '../utils';
import { characters } from '../data/character';
import { join } from 'path';
import { StringifyType } from '../types';

export const initCharactersCommands = (bot: Telegraf) => {
  bot.command('get_random_character', (ctx) => {
    const randomCharacter = getRandomFromList(characters);
    ctx.reply(stringifyCharacter(randomCharacter, StringifyType.Long));
    ctx.replyWithPhoto(
      Input.fromLocalFile(
        join(
          __dirname,
          `../assets/images/characters/${randomCharacter.name}.jpg`,
        ),
      ),
    );
  });
};
