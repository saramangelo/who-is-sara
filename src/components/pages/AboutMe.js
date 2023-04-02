import Avatar from "../Avatar";
import '../../App.css';

export default function AboutMe() {
  return (
    <div className="aboutme-card ">
      <h1 className="header mx-auto mt-5">Sara Angelo</h1>
      <div className="avatar">
        <Avatar />
      </div>
      <section className="icons"
        // className="blurb card-body img-fluid align-items-center shadow-5-strong rounded-4"
        // style={{ width: 500 }}
      >
        <div className="devicons mb-3 d-flex">
          <i class="devicon-html5-plain-wordmark colored"></i>

          <i class="devicon-css3-plain-wordmark colored"></i>

          <i class="devicon-javascript-plain colored"></i>

          <i class="devicon-react-original colored"></i>

          <i class="devicon-express-original colored"></i>

          <i class="devicon-nodejs-plain colored"></i>

          <i class="devicon-python-plain colored"></i>

          <i class="devicon-handlebars-plain colored"></i>

          <i class="devicon-swift-plain colored"></i>

          <i class="devicon-jquery-plain-wordmark colored"></i>

          <i class="devicon-bootstrap-plain-wordmark colored"></i>

          <i class="devicon-mysql-plain colored"></i>

          <i class="devicon-mongodb-plain-wordmark colored"></i>

          <i class="devicon-github-original colored"></i>
        
          
        </div>
      </section>
      <section
        className="blurb card-body img-fluid align-items-center shadow-5-strong rounded-4"
        style={{ width: 500 }}
      >
        <div>
          <strong>Highly motivated</strong>, performance driven Full Stack
          Developer with an accomplished, diverse background in web development,
          healthcare, management, and financial securities.{" "}
          <strong>Enthusiastic</strong> to work with new technologies and
          architectures in a forward-thinking organization that’s always{" "}
          <strong>pushing boundaries</strong>. Experience building products
          across the stack with a firm understanding of web frameworks, APIs,
          databases, and multiple back-end languages, protocols and standards.
          Strong problem solving and analytical skills align with my proficiency
          in{" "}
          <strong>
            HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js,
            progressive web apps, agile development methodologies, MongoDB, GraphQL, MySQL, NoSQL, Git,
            version control systems
          </strong>
          , and their respective best practices.
        </div>
      </section>
      
    </div>
  );
}
