export enum ItemNames {
  'Камінь обміну' = 'Камінь обміну',
  'Камінь Душі' = 'Камінь Душі',
  'Камінь Стихії Природи' = 'Камінь Стихії Природи',
  'Камінь Стихії Вогню' = 'Камінь Стихії Вогню',
  'Камінь Стихії Вітру' = 'Камінь Стихії Вітру',
  'Камінь Стихії Води' = 'Камінь Стихії Води',
  'Камінь Стихії Світла' = 'Камінь Стихії Світла',
  'Камінь Стихії Темряви' = 'Камінь Стихії Темряви',
  'Камінь Універсальної стихії' = 'Камінь Універсальної стихії',
  'Подорожник' = 'Подорожник',
  'Зілля відновлення' = 'Зілля відновлення',
  'Казан з зіллям відновлення' = 'Казан з зіллям відновлення',
  'Рюкзак' = 'Рюкзак',
  'Папір' = 'Папір',
  'Залізна Руда' = 'Залізна Руда',
  'Деревина' = 'Деревина',
  'Золоте Кільце' = 'Золоте Кільце',
  'Срібне Кільце' = 'Срібне Кільце',
  'Шкіра вбитої істоти' = 'Шкіра вбитої істоти',
  'Попіл вбитої істоти' = 'Попіл вбитої істоти',
  'Зуб вбитої істоти' = 'Зуб вбитої істоти',
  'Малий мішечок золота' = 'Малий мішечок золота',
  'Сумка з золотом' = 'Сумка з золотом',
  'Скринька золота' = 'Скринька золота',
}

export type Item = {
  name: ItemNames;
  price: number;
  description: string;
  maxCount: number;
  weight: number;
};
