import { IVerticalToolbarItem } from "../components/dashboard/vertical-toolbar";
import { AiFillGithub, AiFillHtml5, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { ITechnonogyItem } from "../components/main-page/technologies-card";
import { DiCss3, DiFirebase, DiJava, DiJavascript1, DiReact, DiSass } from "react-icons/di";
import { FaGitAlt, FaNodeJs, FaVuejs } from "react-icons/fa";
import { IWorkItem } from "../components/main-page/works-box";
import { IRecomendationItem } from "../components/main-page/recommendations-box";

export const PAGE_INFO = {
  aboutme: {
    img: 'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.6435-9/105856539_1306752363049489_6016767599501592221_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=WtWLi4WLpjUAX9j4dEM&_nc_ht=scontent.fmvd2-1.fna&oh=a996fe00ab2e368283b8117b1b91da2f&oe=61837E21',
  }
};

export const SOCIALS: IVerticalToolbarItem[] = [
  {
    icon: AiOutlineLinkedin,
    label: 'Damian Rodriguez',
    href: 'https://www.linkedin.com/in/damianrz/'
  },
  {
    icon: AiFillGithub,
    label: 'DamianRz',
    href: 'https://github.com/DamianRz'
  },
  {
    icon: AiOutlineInstagram,
    label: '@damianezetiel',
    href: 'https://www.instagram.com/damianezetiel/'
  },
]

export const TECHNOLOGIES: ITechnonogyItem[] = [
  {
    name: 'ReactJS',
    icon: DiReact,
    info: ''
  },
  {
    name: 'VueJS',
    icon: FaVuejs,
    info: ''
  },
  {
    name: 'Javascript',
    icon: DiJavascript1,
    info: ''
  },
  {
    name: 'HTML5',
    icon: AiFillHtml5,
    info: ''
  },
  {
    name: 'CSS3',
    icon: DiCss3,
    info: ''
  },
  {
    name: 'SASS',
    icon: DiSass,
    info: ''
  },
  {
    name: 'Java',
    icon: DiJava,
    info: ''
  },
  {
    name: 'NodeJs',
    icon: FaNodeJs,
    info: ''
  },
  {
    name: 'Firebase',
    icon: DiFirebase,
    info: ''
  },
  {
    name: 'GIT',
    icon: FaGitAlt,
    info: ''
  },
]

export const WORKS: IWorkItem[] = [
  {
    title: 'Art Experience',
    info: 'work.art_experience',
    img: 'https://i.ibb.co/wwKBDdy/ssssssd.png',
    url: 'https://www.artexperience.com.uy/'
  },
  {
    title: 'CyberManager',
    info: 'work.cybermanager',
    img: 'https://i.ibb.co/L0wvfYF/hc.png',
    url: 'http://github.com/Zerobyone-apis/CyberManager/'
  }
]

export const RECOMMENDATIONS: IRecomendationItem[] = [
  {
    name: 'Maximiliano Olivero',
    pic: 'https://i.ibb.co/FDGTXtz/image.jpg',
    url: 'https://www.linkedin.com/in/maximiliano-olivero-9308b067/',
    review: 'reco.1',
  },
  {
    name: 'Gabriel Tortomano',
    pic: 'https://i.ibb.co/1mjJdPt/1.jpg',
    url: 'https://www.linkedin.com/in/gabriel-tortomano-05255365/',
    review: 'reco.2',
  },
  {
    name: 'Gaston Morales Olivera',
    pic: 'https://i.ibb.co/74t3n62/3.jpg',
    url: 'https://www.linkedin.com/in/gaston-morales-olivera-4324ba177/',
    review: 'reco.3',
  }
]
