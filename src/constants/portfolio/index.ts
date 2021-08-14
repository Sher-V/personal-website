export enum ProjectTypes {
  FREELANCE = "FREELANCE",
  PET = "PET",
}
export const portfolioWorks = {
  "1": {
    id: "1",
    en: {
      title: "Shipspotting",
      description:
        "Application for tracking, photographing and logging shipping movements",
    },
    ru: {
      title: "Shipspotting",
      description: "Соц-сеть для людей, увлекающихся кораблями",
    },
    technologies: ["React JS", "HTML5/CSS3", "Formik", "i18n"],
    images: [
      "/images/shipspotting/1.png",
      "/images/shipspotting/2.png",
      "/images/shipspotting/3.png",
      "/images/shipspotting/4.png",
    ],
    type: ProjectTypes.FREELANCE,
  },
  "2": {
    id: "2",
    en: {
      title: "Blog",
      description: "Personal blog",
    },
    ru: {
      title: "Blog",
      description: "Персональный блог",
    },
    technologies: ["Next JS", "Tailwind CSS"],
    images: ["/images/blog/1.png", "/images/blog/2.png", "/images/blog/3.png"],
    type: ProjectTypes.FREELANCE,
  },
  "3": {
    id: "3",
    en: {
      title: "Organizational Chart",
      description:
        "Application for companies to view their organizational structure, modify and export using different formats.",
    },
    ru: {
      title: "Организационный чарт",
      description:
        "Приложение для компаний, где можно просматривать структуру их компании, модифицировать и экспортировать в различных форматах.",
    },
    technologies: ["React JS", "Airtable", "Serverless"],
    images: [
      "/images/chart/1.png",
      "/images/chart/2.png",
      "/images/chart/3.png",
      "/images/chart/4.png",
      "/images/chart/5.png",
      "/images/chart/6.png",
    ],
    type: ProjectTypes.FREELANCE,
  },
};
