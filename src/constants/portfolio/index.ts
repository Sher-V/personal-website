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
};
