import React from "react";
import Avatar from "../Avatar";

export default function AboutMe() {
  return (
    <div>
      <h1>Who is Sara Angelo?</h1>
      <Avatar />
      <p>
      Highly motivated, performance driven Full Stack Developer with an
          accomplished, diverse background in web development, healthcare,
          management, and financial securities. Proven experience in
          collaboration/communication, leadership, adaptability, and conflict
          resolution. Enthusiastic to work with new technologies and
          architectures in a forward-thinking organization that’s always pushing
          boundaries. Ability to possess complete, end-to-end ownership of
          projects while effectively demonstrating communication and
          collaboration in a team-driven environment. Experience building
          products across the stack with a firm understanding of web frameworks,
          APIs, databases, and multiple back-end languages, protocols and
          standards. Strong problem solving and analytical skills align with my
          proficiency in HTML5, CSS3, JavaScript, jQuery, Express.js, React.js,
          Node.js, progressive web apps, agile development methodologies,
          computer science, database theory, MongoDB, MySQL, Git, version
          control systems, and their respective best practices.
      </p>
    </div>
  );
}


// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
