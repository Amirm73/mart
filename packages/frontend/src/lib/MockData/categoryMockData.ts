import { title } from "process";

export interface CategoryData {
  image: string;
  title: string;
}

export const CategoryMockData: CategoryData[] = [
  {
    image: "/cosmetics.png",
    title: "لوازم آرایشی",
  },
  {
    image: "/hand-sanitizer.png",
    title: "لوازم بهداشتی",
  },
  {
    image: "/skincaree.png",
    title: "مراقبت پوست",
  },
  {
    image: "/hair.png",
    title: "مراقب و زیبایی مو",
  },
  {
    image: "/perfume.png",
    title: "عطر و رایحه",
  },
  {
    image: "/nail-polish.png",
    title: "انواع لاک ها",
  },
  {
    image: "/spray-paint.png",
    title: "ضد تعریق",
  },
];
