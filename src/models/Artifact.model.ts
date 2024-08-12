export enum ArtifactSlots {
  Hands = 'Руки',
  Feet = 'Ноги',
  Head = 'Голова',
  Back = 'Спина',
}

export type Artifact = {
  name: string;
  description: string;
  price: number;
  weight: number;
  maxCount: number;
  slot: ArtifactSlots;
};
