import React from 'react';

// TODO: CREATE PROJECT COMPONENT WHERE I PASS PROPS, MAP THROUGH TO 6 PRINT PROJECT TILES HERE
// can use npm uuid or use the index
// inside array:
// 6 projects:
// image of deployed app (gif or screenshot)
// title of project
// link to deployed app (dlink)
// link to corresponding github repo (rlink)

// for image, need to require() right in code

const projects = [

  {
    name: "Kindly",
    description: "Kindly is a full-stack application where volunteer users can create an account, log in, submit available volunteer opportunities, photos, which are then posted to the homepage. Users can also comment on these posts.",
    link: "https://immense-ridge-33507.herokuapp.com/",
    githubLink: "https://github.com/saramangelo/kindly",
    image: ""
  },
  {
    name: "3Rex",
    description: "This movie recommendation application features dynamically updated HyperText Markup Language (HTML) and Cascading Style Sheet (CSS) powered by JavaScript, third party Application Programming Interfaces (APIs), jQuery, Bootstrap, Google Fonts, featuring Server-Side APIs OMDb and YouTube.",
    link: "https://ben-jacquez.github.io/3Rex/",
    githubLink: "https://github.com/Ben-Jacquez/3Rex",
    image: ""
  },
  {
    name: "rain-check",
    description: "This weather application, named rain-check, features dynamically updated HyperText Markup Language (HTML) and Cascading Style Sheet (CSS) powered by JavaScript and the third party Application Programming Interfaces (API), jQuery and Server-Side APIs Materialize, Google Fonts and Open Weathermap. In this application, the user is presented with current and future conditions for a specific city they search, and that city is added to the search history. Users can view current weather or a 5-day forecast for their searched city.",
    link: "https://saramangelo.github.io/rain-check/",
    githubLink: "https://github.com/saramangelo/rain-check",
    image: ""
  },
  {
    name: "web-api-catechize",
    description: "This Web API timed, multiple-choice quiz runs in the browser, featuring dynamically updated HTML and CSS, Third-Party Application Programming Interface, Bootstrap, powered by JavaScript.",
    link: "https://saramangelo.github.io/web-api-catechize/",
    githubLink: "https://github.com/saramangelo/web-api-catechize",
    image: ""
  },
  {
    name: "password-generator",
    description: "This password generator was originally derived from starter code with provided JavaScript (JS), HyperText Markup Language (HTML) and Cascading Style Sheets (CSS) files. The rendering was done solely within the JS file. In the webpage, when the user clicks the button, 'Generate Password,' the user is presented with a series of prompts, asking them to enter the number of characters they would like their password to be (between 8-128), and if they would like to include uppercase, lowercase, numbers and/or special characters. When the user answers each prompt, the information is saved, validated, then rendered on the screen, displaying a generated password that matches the user's selected criteria.",
    link: "https://saramangelo.github.io/password-generator/",
    githubLink: "https://github.com/saramangelo/password-generator",
    image: ""
  },
  {
    name: "read-my-readme",
    description: "This README generator is a command-line app application that accepts user input. While utilizing node, users are prompted for information about their application repository, which is then rendered in the form of a professional README.md with the title of their project and sections entitled Description, Table of Contents, Installation, Usage, License (including badge), Contributing, Tests, and Questions. When the user answers each prompt, the input is generated onto the README.md file in its respective location on the file.",
    link: "https://github.com/saramangelo/read-my-readme",
    githubLink: "https://github.com/saramangelo/read-my-readme",
    image: ""
  },

]



const Portfolio = ({ projects }) => {
  return (
    <div>
      <h3 className="text-primary">Projects</h3>
      <div className="flex-row justify-space-between my-4">
        {projects &&
          projects.map((projects) => (
            <div key={projects._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.name} <br />
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.image} <br />
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.dlink} <br />
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.rlink} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;




// need to create array of objects that I map through to create a component for each element in the array | project tile for each project | NEED 6!!

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the Contact section