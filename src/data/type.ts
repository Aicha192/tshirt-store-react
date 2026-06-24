

export interface menuType {
  name: string;
  lien:string;
  color?: string;
}

export interface TitleComponentProps {
    Subtitle: string;
    Title: string;
    color?: string;
}

export interface listCardsType {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  size: string[];
}

export interface listCardsType {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  size: string[];
  pourcentage?: string;
  description?: string;
}

export interface listTemoignage {
  body: string;
  like: number;
  name: string;
  photo: string;
}

export interface SlidesType {
  image: string;
  text: string;
}