import { ICategory } from "@/interfaces/product";
import {
  Baby,
  BriefcaseMedical,
  Dumbbell,
  HeartPulse,
  Home,
  Laptop,
  Shirt,
} from "lucide-react";

export const categories: ICategory[] = [
  { name: "Women Fashion", dropDown: true, icon: <Shirt strokeWidth={1} /> },
  { name: "Men Fashion", dropDown: true, icon: <Shirt strokeWidth={1} /> },
  { name: "Electronics", dropDown: false, icon: <Laptop strokeWidth={1} /> },
  { name: "Home & Lifestyle", dropDown: false, icon: <Home strokeWidth={1} /> },
  {
    name: "Medicine",
    dropDown: false,
    icon: <BriefcaseMedical strokeWidth={1} />,
  },
  {
    name: "Sport & Outdoor",
    dropDown: false,
    icon: <Dumbbell strokeWidth={1} />,
  },
  { name: "Babies and Toys", dropDown: false, icon: <Baby strokeWidth={1} /> },
  {
    name: "Health & Beauty",
    dropDown: false,
    icon: <HeartPulse strokeWidth={1} />,
  },
];
