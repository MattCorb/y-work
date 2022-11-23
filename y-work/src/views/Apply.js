import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const Apply = () => {
  const formStyle = {
    padding: "10px"
  };
  const inputStyle = {
    marginLeft: '.5rem'
  };
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-star me-2"> </i>
            Application
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">JOB TITLE HERE</h2>
                <h5 className=" mb-4">
                  Enter the required information below
                </h5>
                <form>
                  <label style={formStyle}>First Name:
                    <input style={inputStyle} type="text" />
                  </label>
                  <br></br>
                  <label style={formStyle}>Last Name:
                    <input style={inputStyle} type="text" />
                  </label>
                  <br></br>
                  <label style={formStyle}>Phone Number:
                    <input style={inputStyle} type="phone" />
                  </label>
                  <br></br>
                  <label style={formStyle}>Email:
                    <input style={inputStyle} type="email" />
                  </label>
                  <br></br>
                  <label style={formStyle}>Cover Letter:
                    <button style={inputStyle}>Upload File</button>
                  </label>
                  <br></br>
                  <label style={formStyle}>Resume:
                  <button style={inputStyle}>Upload File</button>
                  </label>
                </form>
                
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
                  target="_blank"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Apply;
