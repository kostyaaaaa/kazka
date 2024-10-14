import { Telegraf } from 'telegraf';
import 'dotenv/config';
import { initDiceCommands } from './commands/dice.commands';
import { initItemsCommands } from './commands/items.commands';
import { initCreaturesCommands } from './commands/creatures.commands';
import { initSkillsCommands } from './commands/skills.commands';
import { initCommonCommands } from './commands/common.commands';
import { initCharactersCommands } from './commands/characters.commands';

const bot = new Telegraf(process.env.BOT_TOKEN);

// commands
initDiceCommands(bot);
initItemsCommands(bot);
initCreaturesCommands(bot);
initSkillsCommands(bot);
initCharactersCommands(bot);
initCommonCommands(bot); // this one should always be the last one

bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
