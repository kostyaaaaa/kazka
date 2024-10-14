export enum Element {
  Dire = 'Темрява',
  Light = 'Світло',
  Fire = 'Вогонь',
  Water = 'Вода',
  Wind = 'Вітер',
  Nature = 'Природа',
  General = 'Загальна',
}

export enum StringifyType {
  Short,
  Long,
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      BOT_TOKEN: string;
    }
  }
}
