export interface CardConfig {
  title: string;
  icon?: string;
  background?: string;
  stats?: { label: string; value: string; }[];
  links?: { text: string; url: string; }[];
  footerButton?: { text: string; action: () => void };
}
