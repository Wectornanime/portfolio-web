export type ProfileApiResponseType = {
  imageUrl: string;
  name: string;
  lastName: string;
  subtitle: string;
  aboutMe: string;
};

export type ProfileLinkApiResponseType = {
  id: number;
  title: string;
  link: string;
};

export type ProjectLinkApiResponseType = {
  id: number;
  title: string;
  link: string;
};

export type ProjectApiResponseType = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
  links: ProfileLinkApiResponseType[];
};

export type CertificateApiResponseType = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  pdfFileUrl: string;
};

export type SkillApiResponseType = {
  id: number;
  title: string;
  iconUrl: string;
};

export type ApiResponse = ProfileApiResponseType & {
  links: ProfileLinkApiResponseType[];
  projects: ProjectApiResponseType[];
  certificates: CertificateApiResponseType[];
  skills: SkillApiResponseType[];
};
