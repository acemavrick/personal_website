export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image?: string;
  image_alt?: string;
  image_fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}
