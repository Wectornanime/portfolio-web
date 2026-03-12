export type ApiResponse = {
  imageUrl: string;
  name: string;
  lastName: string;
  subtitle: string;
  aboutMe: string;
  links: {
    id: number;
    title: string;
    link: string;
  }[];
  projects: {
    id: number;
    title: string;
    text: string;
    imageUrl: string;
    links: {
      id: number;
      title: string;
      link: string;
    }[];
  }[];
  certificates: {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
    pdfFileUrl: string;
  }[];
  skills: {
    id: number;
    title: string;
    iconUrl: string;
  }[];
};
