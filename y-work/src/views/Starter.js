import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardText,
} from "reactstrap";

// function Jobs() {
//     // 👇️ get ID from url
//     const params = useParams();

//     console.log(params); // 👉️ {userId: '4200'}

//     return <h2>JobId is 👉️ {params.opening_id}</h2>;
// }

class Starter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

  render() {
    const { isLoaded, items } = this.state;
    
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Row>
            {items.map((item) => (
              <Col md="12" lg="6">
                <Card body className="text-end">
                  <CardTitle tag="h5" className="border-bottom">
                    {item.posting_title}
                  </CardTitle>
                  <CardText key={item.opening_id} className="">
                    <p>
                      <span style={{ fontWeight: "bold", float: "left" }}>
                        Wage:
                      </span>
                      ${item.min_salary}-${item.max_salary}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold", float: "left" }}>
                        Department:
                      </span>
                      {item.department}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold", float: "left" }}>
                        Category:
                      </span>{" "}
                      {item.category_name}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold", float: "left" }}>
                        Start Date:
                      </span>{" "}
                      {item.start_date}
                    </p>
                  </CardText>
                  <div>
                    <Link to="/apply" className="btn btn-info">
                      Apply
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }
}

export default Starter;
