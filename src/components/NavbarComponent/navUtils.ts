import { CgDetailsMore } from 'react-icons/cg';
import { BiHomeAlt2 } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { BsBook } from 'react-icons/bs';

export const navigations = [
    { link: '/', Icon: BiHomeAlt2, linkTxt: "Home" },
    { link: '/dashboard', Icon: RxDashboard, linkTxt: "Dashboard" },
    { link: '/testparams', Icon: BsBook, linkTxt: "Take A Test" },
    { link: '/about', Icon: CgDetailsMore, linkTxt: "About" },
]