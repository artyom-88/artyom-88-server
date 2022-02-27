export interface IBlogBase {
  link: string;
  linkCaption: string;
  title: string;
}

export interface IBlogDTO extends IBlogBase {
  date: string;
}

export interface IBlog extends IBlogBase {
  date: Date;
}
