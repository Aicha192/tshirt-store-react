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
  name: string;
  image: string;
  price: number;
  category: string;
  size: string[];
}

export interface listCardsType {
  name: string;
  image: string;
  price: number;
  category: string;
  size: string[];
  pourcentage?: string;
}