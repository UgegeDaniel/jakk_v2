import { MdOutlineClass } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
import { FiUserCheck } from 'react-icons/fi';

export const aboutTxt = `Welcome to our app, where you can take objective tests in different subjects for the O-level Nigerian examinations. Our app provides you with a seamless experience as you sign up or log in to access the vast collection of questions available.
With our app, you can take tests in subjects such as English Language, Mathematics, Physics, Chemistry, Biology, and more. You can save your progress as you go and keep track of your results over time.
Our app is built with a Postgres database, Express/Typescript server, and a React/React Bootstrap/Redux Toolkit frontend to ensure a smooth and user-friendly experience. Our team has put in a lot of effort to make sure that the app is intuitive and easy to use, so you can focus on studying and improving your skills.
Whether you're preparing for the O-level Nigerian examinations or just looking to improve your knowledge in a particular subject, our app is here to help. Sign up or log in today to start your learning journey!`

export const homePageTxt = [
    {
        headerTxt: 'Take A Test',
        body: `Our app allows students to take objective tests in different subjects for the O-level Nigerian examinations. This app offers an accessible and intuitive platform for progressive learning to students preparing for various O-level examinations.`,
        Icon: MdOutlineClass
    },
    {
        headerTxt: 'Progress tracking',
        body: `The app allows students to save their progress and see their progress over time.This app offers a visual representation of students progress to track their learning and identify areas where they need to improve.`,
        Icon: GiProgression
    },
    {
        headerTxt: 'User - friendly UI',
        body: `This app combines the speed of react, the simple UI presentation of React bootstrap and the the powerful, unopinionated and simple state mangement of Redux toolkit to provide an overall fluid user expirience.`,
        Icon: FiUserCheck
    },
]