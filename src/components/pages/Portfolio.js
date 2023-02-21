import Project from "../../components/Project";

const Portfolio = () => {
  const projects = [
    {
      name: "DBUG",
      description:
        "DBUG is a content management system designed to help users keep track of their projects, and the bugs that they are running into when working on said projects. The application is designed to provide status, priority level and in depth descriptions about the bugs so that users may receive assistance on bugs from other users. Users have the ability to create, edit and delete tickets to receive support from the rest of their team, with full interactivity from user assigned team members as well as comment functionality to allow for transparent dialogue surrounding bugs within the user’s workflow.",
      link: "https://pacific-tundra-20033.herokuapp.com/",
      githubLink: "https://github.com/saramangelo/cswag-p3",
      image: "dbug.png",
    },
    {
      name: "Kindly",
      description:
        "Kindly is a full-stack application where volunteer users can create an account, log in, submit available volunteer opportunities, photos, which are then posted to the homepage. Users can also comment on these posts.",
      link: "https://immense-ridge-33507.herokuapp.com/",
      githubLink: "https://github.com/saramangelo/kindly",
      image: "kindly.jpg",
    },
    {
      name: "3Rex",
      description:
        "This movie recommendation application features dynamically updated HyperText Markup Language (HTML) and Cascading Style Sheet (CSS) powered by JavaScript, third party Application Programming Interfaces (APIs), jQuery, Bootstrap, Google Fonts, featuring Server-Side APIs OMDb and YouTube.",
      link: "https://ben-jacquez.github.io/3Rex/",
      githubLink: "https://github.com/Ben-Jacquez/3Rex",
      image: "3Rex.jpg",
    },
    {
      name: "Rain Check",
      description:
        "This weather application, named rain-check, features dynamically updated HyperText Markup Language (HTML) and Cascading Style Sheet (CSS) powered by JavaScript and the third party Application Programming Interfaces (API), jQuery and Server-Side APIs Materialize, Google Fonts and Open Weathermap. In this application, the user is presented with current and future conditions for a specific city they search, and that city is added to the search history. Users can view current weather or a 5-day forecast for their searched city.",
      link: "https://saramangelo.github.io/rain-check/",
      githubLink: "https://github.com/saramangelo/rain-check",
      image: "raincheck.jpg",
    },
    {
      name: "Web API Catechize",
      description:
        "This Web API timed, multiple-choice quiz runs in the browser, featuring dynamically updated HTML and CSS, Third-Party Application Programming Interface, Bootstrap, powered by JavaScript.",
      link: "https://saramangelo.github.io/web-api-catechize/",
      githubLink: "https://github.com/saramangelo/web-api-catechize",
      image: "catechize.jpg",
    },
    {
      name: "Password Generator",
      description:
        "This password generator was originally derived from starter code with provided JavaScript (JS), HyperText Markup Language (HTML) and Cascading Style Sheets (CSS) files. The rendering was done solely within the JS file. In the webpage, when the user clicks the button, 'Generate Password,' the user is presented with a series of prompts, asking them to enter the number of characters they would like their password to be (between 8-128), and if they would like to include uppercase, lowercase, numbers and/or special characters. When the user answers each prompt, the information is saved, validated, then rendered on the screen, displaying a generated password that matches the user's selected criteria.",
      link: "https://saramangelo.github.io/password-generator/",
      githubLink: "https://github.com/saramangelo/password-generator",
      image: "passwordgenerator.jpeg",
    },
    {
      name: "Read My README",
      description:
        "This README generator is a command-line app application that accepts user input. While utilizing node, users are prompted for information about their application repository, which is then rendered in the form of a professional README.md with the title of their project and sections entitled Description, Table of Contents, Installation, Usage, License (including badge), Contributing, Tests, and Questions. When the user answers each prompt, the input is generated onto the README.md file in its respective location on the file.",
      link: "https://github.com/saramangelo/read-my-readme",
      githubLink: "https://github.com/saramangelo/read-my-readme",
      image: "readme.jpg",
    },
  ];
  return (
    <div>
      <Project projects={projects}></Project>
    </div>
  );
};

export default Portfolio;
