import React, { useState, useEffect } from "react";
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
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";

const Test = () => {
    // //set all the variables I need for the API
    // let [jobName, setJobName] = useState("");
    // let [jobMinSal, setJobMinSal] = useState("");
    // let [jobMaxSal, setJobMaxSal] = useState("");
    // let [jobCat, setJobCat] = useState("");
    // let [jobDept, setJobDept] = useState("");
    // let [jobSDate, setJobSDate] = useState("");

    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getJobList = async () => {
        setLoading(true);
        const url =
            "https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening";

        const response = await fetch(url);
        try {
            const responseJson = await response.json();
            const data = responseJson.results;
            setJobData(data);
            console.log(jobData);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getJobList();
    }, []);

    // let data_array = [
    //   {
    //     position_title: "Teacher",
    //     min_salary: "14",
    //     max_salary: "16",
    //     department: "Information Systems",
    //     category: "Academic",
    //     start_date: "2022-12-05",
    //   },
    // ];

    // const arr = [];
    // const response = fetch(
    //   "https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening"
    // ).then((res) => res.json());

    // const response = fetch(
    //   "https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening"
    // )
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     let data = JSON.stringify(resJson);
    //     data = JSON.parse(data);

    //   });
    // console.log(response);

    //this one gets it to work with no error but no cards
    // let data_array = [];
    // fetch("https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     data_array = data;
    //     console.log(data_array);
    //   });

    //   Axios.get("https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening")
    //   .then((res =>{
    //         console.log(res.data);
    //     }));

    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col md="6" lg="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}

                    {jobData &&
                        jobData.map((arr, index) => (
                            <Card body className="text-end">
                                <CardTitle tag="h5" className="border-bottom">
                                    {arr.position_title}
                                </CardTitle>
                                <CardText key={index} className="">
                                    <p>
                                        ${arr.min_salary}-${arr.max_salary}
                                    </p>
                                    <p>Department: {arr.department}</p>
                                    <p>Category: {arr.category}</p>
                                    <p>Start Date: {arr.start_date}</p>
                                </CardText>
                                <div>
                                    <Button color="light-success">
                                        Apply to Job
                                    </Button>
                                </div>
                            </Card>
                        ))}
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
};

export default Test;
