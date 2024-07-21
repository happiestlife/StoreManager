import { ReactNode } from "react";

interface Option {
  value: string;
  label: string;
}

interface ContentLayoutComp {
  title: JSX.Element;
  content: JSX.Element;
  footer?: ReactNode;
}


export type {Option, ContentLayoutComp};