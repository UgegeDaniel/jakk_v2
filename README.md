# Description

JAKK is a web application designed to help users prepare for Nigerian O-level examinations. It provides a platform for students to practice objective tests based on past questions, track their progress, and improve their performance. With a user-friendly interface and comprehensive features, App Name aims to enhance exam preparation and boost confidence for students.
This app offers an accessible and intuitive platform for progressive learning to students preparing for various O-level examinations. Its a simple app to demostrate the basic features of the angular framework.

## Table of Contents

- [App Features]
- [Concepts and Apis Employed]
- [Built with]
- [Mock Designs]
- [Live Preview]
- [Required Installations]
- [Installation of This App]
- [License]
- [Contact]
- [Acknowledgements]

<!-- App features -->

## App Features

1. Sign up / Sign in / Email verification

   - Users can create an account, log in securely, and verify their email address to ensure the authenticity of user accounts. Email verification adds an extra layer of security and prevents unauthorized access.

2. Take objective tests in Nigerian O-level past questions

   - The app offers a vast collection of objective test questions from previous Nigerian O-level examinations across various subjects. Users can select a specific subject and attempt timed tests to simulate real exam conditions. The questions are carefully curated to cover the entire syllabus, providing comprehensive practice material.

3. Save progress and display it on a chart
   - User progress and performance are saved, allowing them to track their improvement over time. A visual chart displays their scores and highlights areas of strength and weakness, aiding targeted study and revision. This feature motivates users to continue practicing and helps them identify areas that require more attention.

<!-- 4. Personalized study recommendations
   - Based on the user's performance and progress, the app provides personalized study recommendations. It analyzes the user's strengths and weaknesses and suggests specific topics or areas to focus on for further improvement. This tailored guidance helps users optimize their study time and maximize their learning outcomes.

5. Performance analytics and insights
   - The app generates detailed performance analytics and insights based on the user's test results. Users can view their overall performance, average scores, time taken per question, and other metrics. These analytics provide valuable feedback and enable users to identify patterns, evaluate their performance objectively, and strategize their study approach accordingly.

6. Social features and community support
   - The app includes social features to foster a sense of community and support among users. Users can connect with fellow students, share study resources, ask questions, and engage in discussions. This collaborative environment promotes learning, motivation, and the exchange of knowledge. -->

<!-- concepts and apis employed -->

## Concepts and APIs Employed

### APIs Employed

- To provide a seamless user experience, a custom API has been developed specifically for this app. The API handles user authentication, test retrieval, progress tracking, data storage, and analytics generation. It is designed to efficiently handle concurrent requests and ensure data integrity.

- Official API documentation for the movie db can be found [here](https://github.com/UgegeDaniel/apis/tree/master/express-sqldb);

### Concepts Employed

1. User Authentication and Authorization

The app implements a user authentication and authorization system to secure user accounts and control access to app features. This can be achieved by saving a json web token gotten after successful sign up / sign in to local storage of the web browser.

2. State Management

Redux Toolkit is used for state management in the app, allowing efficient handling of application state across components. Redux Toolkit simplifies the setup and management of Redux, providing features like slice reducers, immutable state updates, and built-in middleware.
Styling and UI Components

3. React Bootstrap, a UI library based on Bootstrap, is employed for styling and UI components. It offers a wide range of pre-designed components that can be easily customized and responsive layouts that ensure consistent styling across different devices.
   Testing

4. The app is tested using Jest, a popular JavaScript testing framework, along with React Testing Library. These tools provide utilities for writing unit tests and testing React components, ensuring that the app functions as expected and minimizing the chances of regressions.
   Code Quality and Linting

5. ESLint, a widely used JavaScript linter, can be configured to enforce code style consistency and identify potential errors or code smells. The configuration can be customized based on personal or project-specific preferences.

<!-- BUILT wITH -->

## Built with

1. React / TypeScript

   - The app is built using React, a popular JavaScript library for building user interfaces, combined with TypeScript for enhanced type safety and developer productivity. React's component-based architecture enables modular development and easy UI management.

2. React Router dom

   - The app is uses using React Router dom for dynamic routing of users through out the app.

3. Redux Toolkit / react custom hooks

   - Redux Toolkit is used for state management, making it easier to manage and update application state across different components. Redux Toolkit simplifies the process of defining actions, reducers, and selectors, reducing boilerplate code and enhancing code maintainability.

4. React Bootstrap

   - React Bootstrap is employed for styling and UI components, offering a responsive and visually appealing interface for users. It provides a wide range of pre-designed components and utilities that facilitate faster development and ensure consistent styling.

5. Jest / React Testing Library

   - The app utilizes Jest and React Testing Library for unit testing and ensuring code quality. Tests are written to validate the functionality and behavior of components, ensuring that critical features are working as expected and minimizing the chances of regressions.

6. Code Quality and Linting

  - ESLint, a widely used JavaScript linter, is configured to enforce code style consistency and identify potential errors or code smells. The configuration can be customized based on personal or project-specific preferences.

<!-- MOCK DESIGNS -->

## Mock Designs

See mock design guides for the app below;

- Home Screen.
  ![Image](/src/assets/mocks/home-screen.png)
- Movie Category List Screen.
  ![Image](/src/assets/mocks/category-screen.png)
- Single Movie View Screen.
  ![Image](/src/assets/mocks/single-view-screen.png)

<!-- LIVE PREVIEW -->

## Live Preview

Find the live version [here](https://moviemania-app.netlify.app/).
Below is a screenshot of what it looks like.

https://user-images.githubusercontent.com/31358867/142187908-396f7f76-3304-4818-851b-148cf93bfec9.mp4

<!-- REQUIRED INSTALLATION -->

## Required Installations

- Npm

<!-- INSTALLATION -->

## Installation of This Repository

Once you have installed the required packages shown on the [Required Installations](#required-installations), proceed with the following steps

Clone the Repository

```Shell
your@pc:~$ git clone git@github.com:frankly034/moviemania-app.git
```

Move to the downloaded folder

```Shell
your@pc:~$ cd moviemania
```

Install all packages

```Shell
your@pc:~$ npm install
```

Open the app

```Shell
your@pc:~$ npm start
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

- 🇳🇬 Ugege Daniel - ugege62@gmail.com | [Github Account](https://github.com/UgegeDaniel) | [Twitter](https://twitter.com/ugege_daniel) | [Linkedin](https://www.linkedin.com/in/daniel-ugege-50a499227/) |

## Acknowledgements

- [Lewis Ugege](https://github.com/frankly034) and God Almighty .
