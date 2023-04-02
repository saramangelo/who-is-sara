import { MDBIcon } from "mdb-react-ui-kit";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="download d-flex text-center">Download my resume</h1>
      <p>
        <a
          href="https://docs.google.com/document/d/1kb-w-Lm-UAzbaKwu0JF8g2uUUa-oK4BA_LcK8BbNzUY/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <MDBIcon fas icon="file-download" size="8x" />
        </a>
      </p>
    </div>
  );
}
