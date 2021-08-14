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
  "4": {
    id: "4",
    en: {
      title: "Queue app",
      description:
        "Application for companies to provide physical services for clients using a live queue. Businesses have their own QR-code which can be used by a client to enter the line. Clients can see the estimated waiting time changing in live. Once a client gets invited he receives sms notification that it's his turn.",
    },
    ru: {
      title: "Приложение для управления очередями",
      description:
        "Приложение для компаний для предоставления физических услуг с использованием очереди. Каждый бизнес имеет свой уникальный QR-код по которому клиент может попасть в очередь. Клиенты могут видеть оставшееся время в лайве. Когда бизнесс отправляет приглашение - клиент получает смс-уведомление, что его очередь пришла.",
    },
    technologies: ["React JS", "Firebase", "Google Cloud", "Twilio"],
    images: [
      "/images/queue/1.png",
      "/images/queue/2.png",
      "/images/queue/3.png",
      "/images/queue/4.png",
      "/images/queue/5.png",
      "/images/queue/6.png",
      "/images/queue/7.png",
      "/images/queue/8.png",
    ],
    type: ProjectTypes.FREELANCE,
  },
};
