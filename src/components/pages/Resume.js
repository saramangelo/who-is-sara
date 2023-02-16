import { MDBIcon } from "mdb-react-ui-kit";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="download">Download my resume</h1>
      <p>
        <a
          href="https://docs.google.com/document/d/1gNOXZFdXiSzXLeWHnBtuKGtfCXG9PkdEUpLe7lZORMQ/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <MDBIcon fas icon="file-download" size="8x" />
        </a>
      </p>
    </div>
  );
}
