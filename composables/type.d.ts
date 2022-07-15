export type Souvenir = {
  name: string;
  price: number;
  url: string;
  category: 'souvenir' | 'gift';
  bgc: string;
  slug: string;
  size?: string;
};
