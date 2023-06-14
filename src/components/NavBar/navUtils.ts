import { CgDetailsMore } from 'react-icons/cg';
import { BiHomeAlt2, BiTask } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';

export const navigations = [
  { link: '/', Icon: BiHomeAlt2, linkTxt: 'Home' },
  { link: '/dashboard', Icon: RxDashboard, linkTxt: 'Dashboard' },
  [
    { link: '/testparams', Icon: BsBook, linkTxt: 'Take A Test' },
    { link: '/joinClass', Icon: AiOutlineUsergroupAdd, linkTxt: 'Join Class', proFeature: true },
    { link: '/assignTest', Icon: BiTask, linkTxt: 'Assign Test', proFeature: true },
  ],
  { link: '/about', Icon: CgDetailsMore, linkTxt: 'About' },
];