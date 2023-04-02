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
          <i className="devicon-html5-plain-wordmark colored p-2"></i>

          <i className="devicon-css3-plain-wordmark colored p-2"></i>

          <i className="devicon-javascript-plain colored p-2"></i>

          <i className="devicon-react-original colored p-2"></i>

          <i className="devicon-express-original colored p-2"></i>

          <i className="devicon-nodejs-plain colored p-2"></i>

          <i className="devicon-python-plain colored p-2"></i>

          <i className="devicon-handlebars-plain colored p-2"></i>

          <i className="devicon-swift-plain colored p-2"></i>

          <i className="devicon-jquery-plain-wordmark colored p-2"></i>

          <i className="devicon-bootstrap-plain-wordmark colored p-2"></i>

          <i className="devicon-mysql-plain colored p-2"></i>

          <i className="devicon-mongodb-plain-wordmark colored p-2"></i>

          <i className="devicon-github-original colored p-2"></i>
        
          
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
