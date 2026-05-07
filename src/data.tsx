import Projects from "./Components/Projects";

export interface ILinks {
  github: string;
  telegram: string;
  email: string;
  phone: string;
}
export interface Project {
  title: string;
  description: string;
  langs: string[];
  image: string;
  link: string;
  difficilty: "easy" | "medium" | "hard" | "expert";
}
interface IData {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  links: ILinks;
  projects: Project[];
}

export const data: IData = {
  name: "Mark Sidorov(Марк Сидоров)",
  role: "Front-end developer/ Gamedev",
  bio: "Я очень крутой и очень круто делаю сайты. Могу также делать механики в игре",
  avatar:
    "https://www.image2url.com/r2/default/images/1778002237233-9b04b16b-0801-47c6-8532-06bf1aa1daf6.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Supabase",
    "Git",
    "C#(unity)",
    "Физику знаю",
  ],
  links: {
    github: "https://github.com/gggjghiuuu",
    telegram: "???",
    email: "sidorovmark123@gmail.com",
    phone: "секрет",
  },
  projects: [
    {
      title: "Планировщик заданий с фильтром",
      description: "Крутой проект на jsx",
      langs: ["JavaScript", "React", "База данных", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1777552248180-e13b6aa5-7e8f-4ae2-8b3c-e9f90bd01a80.png",
      link: "https://task-manager-v1-five.vercel.app/",
      difficilty: "hard",
    },
    {
      title: "Планировщик заданий",
      description: "Крутой проект на jsx",
      langs: ["JavaScript", "React", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1777554502688-c5104061-9052-4ba2-8fce-469e83685628.png",
      link: "https://react5-eosin.vercel.app/",
      difficilty: "medium",
    },
    {
      title: "Time game",
      description: "Крутой проект на jsx",
      langs: ["JavaScript", "React", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1777741913391-9390aa3d-439f-412b-a5df-0e54dd7670c2.png",
      link: "https://timegame-three.vercel.app/",
      difficilty: "easy",
    },
    {
      title: "Quiz",
      description: "Викторина, сделанная на React",
      langs: ["JavaScript", "React", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1778000853198-9b09ce39-0cbc-44b5-8937-6020ed263377.png",
      link: "https://quiz-delta-two-64.vercel.app/",
      difficilty: "medium",
    },
    {
      title: "Shop",
      description: "В принпипе обычный проект на JSX",
      langs: ["JavaScript", "React", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1778001172806-aebdcb53-7895-46de-b950-4cee2cbb5b28.png",
      link: "https://gggggshop-cyng8unfk-amudeshniks-projects.vercel.app/",
      difficilty: "medium",
    },
    {
      title: "Мессенджер",
      description: "Самый большой мой проект на реакте",
      langs: ["JavaScript", "React", "CSS", "Работает с базой данных"],
      image:
        "https://www.image2url.com/r2/default/images/1778001354402-9725bdaf-ef98-469a-b7df-3840bd6c13c0.png",
      link: "https://social-friends-etdv.vercel.app/",
      difficilty: "expert",
    },
    {
      title: "Место",
      description: "Первый хороший проект на Javascript",
      langs: ["JavaScript", "HTML", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1778001639094-291bd487-3de1-42e0-8d89-7b14e61a53ac.png",
      link: "https://mestootootto.vercel.app/",
      difficilty: "hard",
    },
    {
      title: "Ясделие",
      description: "Сайт, сделанный на заказ. Функционала нет",
      langs: ["HTML", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1778087108031-7064b702-f00d-4786-9fe2-eb292512d13c.png",
      link: "https://gggjghiuuu.github.io/yasdelieeeee/",
      difficilty: "easy",
    },
    {
      title: "Портфолио",
      description: "Вот этот сайт!",
      langs: ["TypeScript", "React", "CSS"],
      image:
        "https://www.image2url.com/r2/default/images/1778001965674-4322856c-b243-40b1-b284-a14970721767.png",
      link: "https://www.image2url.com/r2/default/images/1778087559913-ecc75550-86a5-4b3f-bd6a-fb9afd97f220.png",
      difficilty: "easy",
    },
  ],
};
