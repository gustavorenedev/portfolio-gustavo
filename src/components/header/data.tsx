import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

interface SocialLink {
  id: number;
  link: string;
  icon: React.ReactElement<IconType>;
}

const data: SocialLink[] = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/gustavo-rene-dias/",
    icon: <AiOutlineLinkedin />,
  },
  { id: 2, link: "https://github.com/gustavorenedev", icon: <AiFillGithub /> },
  { id: 3, link: "https://wa.me/5511986674148", icon: <AiOutlineWhatsApp /> },
];

export default data;
