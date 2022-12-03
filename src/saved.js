import React, { useEffect, useMemo, useState } from "react";
import Item from "./components/dashboard/Item";
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
import "./App.css";

const Saved = () => {
    let APIUrl =
        "https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening";
    console.log(APIUrl);

    const getAPI = async () => {
        const response = await fetch(APIUrl);
        const jsonData = await response.json();

        setUserData(jsonData);
    };

    const [userData, setUserData] = useState([]);

    // Add default value on page load
    useEffect(() => {
        getAPI();
    }, []);

    return (
        <div className="app">
            <div>
                <Row>
                    {userData
                        .filter((userData) => userData.opening_id % 2 !== 0)
                        .map((item) => (
                            <Col md="12" lg="6">
                                <Card body className="text-end">
                                    <img
                                        src={`${item.img}`}
                                        height="150px"
                                        width="auto"
                                        style={{
                                            float: "left",
                                            // margin: "auto",
                                            // marginTop: "30px",
                                            marginBottom: "10px",
                                            border: "2px solid black",
                                            // borderRadius: "25px",
                                            objectFit: "cover",
                                        }}
                                    ></img>
                                    <CardTitle
                                        tag="h5"
                                        className="border-bottom"
                                    >
                                        <div className="rating">
                                            <input
                                                type="checkbox"
                                                checked
                                                value={`${item.opening_id}`}
                                                id={`${item.opening_id}`}
                                                autocomplete="off"
                                            ></input>
                                            <label for={`${item.opening_id}`}>
                                                ☆
                                            </label>
                                        </div>
                                        {item.posting_title}
                                    </CardTitle>
                                    <CardText
                                        key={item.opening_id}
                                        className=""
                                    >
                                        <p>
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    float: "left",
                                                }}
                                            >
                                                Wage:
                                            </span>
                                            ${item.min_salary}-$
                                            {item.max_salary}
                                        </p>
                                        <p>
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    float: "left",
                                                }}
                                            >
                                                Department:
                                            </span>
                                            {item.department}
                                        </p>
                                        <p>
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    float: "left",
                                                }}
                                            >
                                                Category:
                                            </span>{" "}
                                            {item.category_name}
                                        </p>
                                        <p>
                                            <span
                                                style={{
                                                    fontWeight: "bold",
                                                    float: "left",
                                                }}
                                            >
                                                Start Date:
                                            </span>{" "}
                                            {item.start_date}
                                        </p>
                                    </CardText>
                                    <div>
                                        <Link
                                            to={`/apply/?job=${item.opening_id}`}
                                            className="btn btn-primary"
                                        >
                                            Apply
                                        </Link>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
};

export default Saved;
