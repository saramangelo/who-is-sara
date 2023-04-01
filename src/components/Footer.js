import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import "../index.css";

export default function App() {
  return (
    <MDBFooter bgColor="" className="text-center text-lg-start text-muted">
      <div
        className="text-center"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <section className="icons">
          <MDBContainer className="">
            <MDBRow className="">
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4"> </h6>
                <section className="icon-row">
                  <div className="me-5 d-none d-lg-block"></div>

                  <div className="footer-icons">
                    <a
                      href="mailto:saramangelo@gmail.com"
                      className="me-4 text-reset"
                    >
                      <MDBIcon icon="envelope" size="lg" />
                    </a>

                    <a
                      href="https://github.com/saramangelo"
                      target="_blank"
                      rel="noreferrer"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="github" size="lg" />
                    </a>
                    <a
                      href="https://twitter.com/thats_no_h"
                      target="_blank"
                      rel="noreferrer"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="twitter" size="lg" />
                    </a>
                    <a
                      href="https://www.instagram.com/noooo_h/"
                      target="_blank"
                      rel="noreferrer"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="instagram" size="lg" />
                    </a>
                    <a
                      href="https://www.facebook.com/sara.no.h.angelo/"
                      target="_blank"
                      rel="noreferrer"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="facebook-f" size="lg" />
                    </a>
                  </div>
                </section>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div class="footer-copyright text-center p-3 grey lighten-1 text-gray-50">
          © 2023 Copyright:
          <br></br>
          <a
            id="footer-link-react-copyright"
            class="black-text"
            href="https://github.com/saramangelo"
          >
            Sara Angelo
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
