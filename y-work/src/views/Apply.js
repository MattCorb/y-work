import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Button,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Tabs from "../components/dashboard/Tabs";
import "../App.css";

const Apply = () => {
    const search = useLocation().search;
    const jobValue = new URLSearchParams(search).get("job");
    // const jobValue = urlParams.get("job");
    console.log(jobValue);
    let APIUrl =
        "https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening/" +
        jobValue;
    console.log(APIUrl);

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(APIUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    };

    const [userData, setUserData] = useState([]);

    function perksfunction(perks) {
        if (perks == null) {
            return "";
        } else {
            return (
                <div>
                    <h5>Perks:</h5>
                    <ul>
                        <li>{perks}</li>
                    </ul>
                </div>
            );
        }
    }

    function hoursfunction(minhours, maxhours) {
        if (minhours != null && maxhours != null) {
            let string = minhours + "-" + maxhours + " hours";
            return <span>{string}</span>;
        } else if (minhours == null && maxhours != null) {
            let string = maxhours;
            return <span>{string}</span>;
        } else if (minhours != null && maxhours == null) {
            let string = minhours;
            return <span>{string}</span>;
        } else if (minhours == null && maxhours == null) {
            let string = "Flexible";
            return <span>{string}</span>;
        }
    }

    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    return (
        <Row>
            {userData.map((item) => (
                <Col>
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <i className="bi bi-star me-2 p-2"> </i>
                            <Link to="/starter">All Jobs</Link> / Application to{" "}
                            {item.posting_title}
                        </CardTitle>

                        <Tabs>
                            <div label="Job Details">
                                <CardBody className="p-4" key={item.opening_id}>
                                    <Row justify-content>
                                        <Col lg="9">
                                            <div>
                                                <h2>Description</h2>
                                                {item.job_description}
                                            </div>
                                            <br></br>
                                            {perksfunction(item.perks)}

                                            <div className="summary">
                                                <h2>Summary Items</h2>
                                                <ol>
                                                    <li>
                                                        <h6
                                                            style={{
                                                                display:
                                                                    "inline",
                                                            }}
                                                        >
                                                            Number of Openings:
                                                        </h6>
                                                        <span>
                                                            {item.numopenings}
                                                        </span>
                                                        <br></br>
                                                    </li>
                                                    <li>
                                                        <h6
                                                            style={{
                                                                display:
                                                                    "inline",
                                                            }}
                                                        >
                                                            Start Date:
                                                        </h6>
                                                        <span>
                                                            {item.start_date}
                                                        </span>
                                                        <br></br>
                                                    </li>
                                                    <li>
                                                        <h6
                                                            style={{
                                                                display:
                                                                    "inline",
                                                            }}
                                                        >
                                                            Apply By:
                                                        </h6>
                                                        <span>
                                                            {item.closing_date}
                                                        </span>
                                                        <br></br>
                                                    </li>
                                                    <li>
                                                        <h6
                                                            style={{
                                                                display:
                                                                    "inline",
                                                            }}
                                                        >
                                                            Expected Weekly
                                                            Hours:
                                                        </h6>
                                                        {hoursfunction(
                                                            item.min_hours,
                                                            item.max_hours
                                                        )}

                                                        <br></br>
                                                    </li>
                                                </ol>
                                            </div>

                                            <br></br>
                                            <div>
                                                <h2>
                                                    Application Instructions
                                                </h2>

                                                {item.app_instructions}
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </div>
                            <div label="Apply Form">
                                <CardBody className="p-4" key={item.opening_id}>
                                    <Row justify-content>
                                        <Col lg="6">
                                            <h2 className="mt-4">
                                                {item.posting_title}
                                            </h2>
                                            <h5 className="mb-4">
                                                Enter the required information
                                                below.
                                            </h5>

                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        First Name:
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Last Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Phone Number:
                                                    </label>
                                                    <input
                                                        type="phone"
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Cover Letter:
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                    ></input>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Resume:
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                    ></input>
                                                </div>
                                            </form>

                                            <br />
                                            <Button
                                                className="mt-3 btn btn-secondary"
                                                color="primary"
                                                href="/starter"
                                            >
                                                Submit
                                            </Button>
                                        </Col>
                                        <Col lg="4">
                                            <img
                                                src={`${item.img}`}
                                                width="450px"
                                                style={{
                                                    float: "left",
                                                    margin: "auto",
                                                    marginTop: "30px",
                                                    border: "2px solid black",
                                                    borderRadius: "25px",
                                                }}
                                            ></img>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </div>
                        </Tabs>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
// };

export default Apply;
