import { MDBIcon } from "mdb-react-ui-kit";

export default function Resume() {
  return (
    <div>
      <h1>Download my resume</h1>
      <p>
        <a
          href="https://docs.google.com/document/d/1XK_DyLkEUdEn_hMdLL1NRjbPSyInn-o4QIUld_JdYTc/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <MDBIcon fas icon="file-download" size="8x" />
        </a>
      </p>
    </div>
  );
}
