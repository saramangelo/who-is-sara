import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div
        className="text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4"> </h6>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                  <div className="me-5 d-none d-lg-block"></div>

                  <div>
                    <a
                      href="https://www.facebook.com/sara.no.h.angelo/"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a
                      href="https://twitter.com/thats_no_h"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="twitter" />
                    </a>
                    <a
                      href="https://www.instagram.com/noooo_h/"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="instagram" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sara-angelo/"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="linkedin" />
                    </a>
                    <a
                      href="https://github.com/saramangelo"
                      className="me-4 text-reset"
                    >
                      <MDBIcon fab icon="github" />
                    </a>
                    <a
                      href="mailto:saramangelo@gmail.com"
                      className="me-4 text-reset"
                    >
                      <MDBIcon icon="envelope" />
                    </a>
                  </div>
                </section>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </MDBFooter>
  );
}
