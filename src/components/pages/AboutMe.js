import Avatar from "../Avatar";
import '../../components/styles/AboutMe.css'

export default function AboutMe() {
  return (
    <div className="aboutme-card ">
      <h1 className="header">Sara Angelo</h1>
      <div className="avatar"><Avatar /></div>
      
      <section className=" card-body img-fluid align-items-center shadow-5-strong rounded-4"style={{ width: 500 }}>
        <strong>Highly motivated</strong>, performance driven Full Stack Developer with an
        accomplished, diverse background in web development, healthcare,
        management, and financial securities. <strong>Enthusiastic</strong> to work with new
        technologies and architectures in a forward-thinking organization that’s
        always <strong>pushing boundaries</strong>. Experience building products
        across the stack with a firm understanding of web frameworks, APIs,
        databases, and multiple back-end languages, protocols and standards.
        Strong problem solving and analytical skills align with my proficiency
        in <strong>HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js,
        progressive web apps, agile development methodologies, computer science,
        database theory, MongoDB, MySQL, NoSQL, GraphQL, Git, version control
        systems</strong>, and their respective best practices.
      </section>
    </div>
  );
}
