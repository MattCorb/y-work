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
import user5 from "../assets/images/users/user5.jpg";

const Info = () => {

    const formStyle = {
        padding: "10px",
    };
    const inputStyle = {
        marginLeft: ".5rem",
    };

    return (
        <Row>
            
                {/* <Col> */}
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <i className="bi bi-pencil me-2 p-2"> </i>
                            Your Information
                        </CardTitle>
                        <CardBody className="p-4">
                            
                            <Col m='6' lg='4'>
                                  <img
                                      src={`${user5}`}
                                      height="300px"
                                      width="auto"
                                      style={{
                                          float: "none",
                                          margin: "auto",
                                          // marginTop: "30px",
                                          // marginLeft: "20px",
                                          // marginRight:"20px",
                                          padding: "0px",
                                          border: "2px solid black",
                                          // borderRadius: "25px",
                                          objectFit: "cover"
                                      }}
                                  ></img>
                            
                            </Col>
                                            
                            <Col m='6' lg='4'>
                            
                            
                                  {/* <div>
                                    
                                  </div> */}
                                {/* <Col lg="6"> */}
                                    <h1 className="mt-4">
                                        Dan Smith
                                    </h1>
                                    <h4 className="mb-4">
                                        Account Info
                                    </h4>

                                    
                                    <div className="mb-3">
                                        <b>NetID:</b> dsmith
                                    </div>

                                    <div className="mb-3">
                                        <b>Email:</b> dan.smith@byu.edu
                                    </div>

                                    <div className="mb-3">
                                        <b>Phone Number:</b> (123)456-7890
                                    </div>

                                    <div className="mb-3">
                                        <b>Major:</b> Information Systems
                                    </div>   

                                    </Col>
                            
                        </CardBody>
                    </Card>
                {/* </Col> */}
            
        </Row>
    );
};
// };

export default Info;
