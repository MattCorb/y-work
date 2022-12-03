import { array } from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
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
import "../App.css";
import { ReactComponent as FilterComp } from "../assets/images/logos/filter-solid.svg";

const Test3 = () => {
    const getAPI = async () => {
        const response = await fetch(
            "https://g5pp6siiwl.execute-api.us-east-1.amazonaws.com/opening"
        );
        const jsonData = await response.json();
        setArrayToFilter(jsonData);
    };

    // const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedDepartment, setSelectedDepartment] = useState();
    const [selectedShift, setSelectedShift] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [sortValue, setSortValue] = useState();
    const [hidden, setHidden] = useState(true);

    // const numDescending = [...jsonData].sort((a, b) => b.max_salary - a.max_salary);
    // console.log(numDescending);

    // Add default value on page load
    useEffect(() => {
        getAPI();
    }, []);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }
    function handleDepartmentChange(event) {
        setSelectedDepartment(event.target.value);
    }
    function handleShiftChange(event) {
        setSelectedShift(event.target.value);
    }
    function handleSortChange(event) {
        setSortValue(event.target.value);
    }
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    //SEPARATE EXPERIMENTATION

    const [arrayToFilter, setArrayToFilter] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    // const [selectedCategoryOptions, setSelectedCategoryOptions] = useState();

    const filterSelectedCategoryOptions = () => {
        if (selectedCategory) {
            return arrayToFilter.filter(
                (item) => item.category_name === selectedCategory
            );
        }
        return arrayToFilter;
    };

    const filterDepartment = () => {
        if (selectedDepartment) {
            return filteredList.filter(
                (item) => item.department === selectedDepartment
            );
        }
        return filteredList;
    };

    const filterShift = () => {
        if (selectedShift) {
            return filteredList.filter((item) => item.shift === selectedShift);
        }
        return filteredList;
    };

    const searchJobs = () => {
        if (searchTerm) {
            return filteredList.filter(
                (item) =>
                    item.job_description
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase()) != -1 ||
                    item.posting_title
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase()) != -1 ||
                    item.department
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase()) != -1 ||
                    item.shift
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase()) != -1
            );
        }
        return filteredList;
    };

    const sortData = () => {
        if (sortValue === "dateAsc") {
            return filteredList.sort((a, b) =>
                a.start_date > b.start_date ? 1 : -1
            );
        } else if (sortValue === "dateDesc") {
            return filteredList.sort((a, b) =>
                a.start_date > b.start_date ? -1 : 1
            );
        } else if (sortValue === "salAsc") {
            return filteredList.sort((a, b) => a.max_salary - b.max_salary);
        } else if (sortValue === "salDesc") {
            return filteredList.sort((a, b) => b.max_salary - a.max_salary);
        } else {
            return filteredList;
        }
    };

    const openLeftNav = () => {};

    var filteredList = useMemo(filterSelectedCategoryOptions, [
        selectedCategory,
        arrayToFilter,
    ]);

    filteredList = useMemo(filterDepartment, [
        selectedDepartment,
        filteredList,
    ]);

    filteredList = useMemo(filterShift, [selectedShift, filteredList]);

    filteredList = useMemo(searchJobs, [searchTerm, filteredList]);

    var sortedList = useMemo(sortData, [sortValue, filteredList]);

    return (
        <div className="app">
            <div className="mb-3 col-lg-4 col-md-6">
                <button
                    className="k-button btns btn-filter btn-primary"
                    onClick={() => setHidden((s) => !s)}
                    style={{ height: "40px", marginRight: "5px" }}
                >
                    <FilterComp className="filtercomp" />
                    FILTER
                </button>
            </div>
            <div className="row">
                <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label" for="search">
                        Search:
                    </label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        className="form-control"
                        placeHolder="Search for..."
                        onChange={handleSearch}
                    ></input>
                </div>
                <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label" for="category-list">
                        Sort:
                    </label>
                    <select
                        name="category-list"
                        id="category-list"
                        onChange={handleSortChange}
                        className="form-select"
                    >
                        <option value="">--</option>
                        <option value="salAsc">
                            Sort by Salary (Ascending)
                        </option>
                        <option value="salDesc">
                            Sort by Salary (Descending)
                        </option>
                        <option value="dateAsc">
                            Sort by Starting Date (Ascending)
                        </option>

                        <option value="dateDesc">
                            Sort by Starting Date (Descending)
                        </option>
                    </select>
                </div>
            </div>

            {!hidden ? (
                <div className="filter-container row">
                    <div className="mb-3 col-lg-4 col-md-6">
                        <label className="form-label" for="category-list">
                            Filter Category:
                        </label>
                        <select
                            name="category-list"
                            id="category-list"
                            onChange={handleCategoryChange}
                            className="form-select"
                        >
                            <option value="">All</option>
                            <option value="Clerical">Clerical</option>
                            <option value="Dining">Dining</option>
                            <option value="Academic">Academic</option>
                            <option value="MTC">MTC</option>
                        </select>
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6">
                        <label className="form-label" for="category-list">
                            Filter Department:
                        </label>
                        <select
                            name="category-list"
                            id="category-list"
                            onChange={handleDepartmentChange}
                            className="form-select"
                        >
                            <option value="">All</option>
                            <option value="College of Nursing">
                                College of Nursing
                            </option>
                            <option value="Careers & Exp Learning">
                                Careers & Exp Learning
                            </option>
                            <option value="Dining Services">
                                Dining Services
                            </option>
                            <option value="Language Flagship">
                                Language Flagship
                            </option>
                            <option value="Physical Facilities Division">
                                Physical Facilities Division
                            </option>
                        </select>
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6">
                        <label className="form-label" for="category-list">
                            Filter Shift:
                        </label>
                        <select
                            name="category-list"
                            id="category-list"
                            onChange={handleShiftChange}
                            className="form-select"
                        >
                            <option value="">All</option>
                            <option value="Flexible">Flexible</option>
                            <option value="Late Night (After 10 PM)">
                                Late Night (After 10 PM)
                            </option>
                            <option value="Evening (During 5 PM - 10 PM)">
                                Evening (During 5 PM - 10 PM)
                            </option>
                            <option value="Afternoon (Noon - 5 PM)">
                                Afternoon (Noon - 5 PM)
                            </option>

                            <option value="Morning (During 8 AM - Noon)">
                                Morning (During 8 AM - Noon)
                            </option>
                            <option value="Early Morning (Before 8 AM)">
                                Early Morning (Before 8 AM)
                            </option>
                        </select>
                    </div>
                </div>
            ) : null}

            <div>
                <Row>
                    {sortedList.map((item) => (
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
                                <CardTitle tag="h5" className="border-bottom">
                                    <div className="rating">
                                        <input
                                            type="checkbox"
                                            value={`${item.opening_id}`}
                                            id={`${item.opening_id}`}
                                            autoComplete="off"
                                        ></input>
                                        <label for={`${item.opening_id}`}>
                                            ☆
                                        </label>
                                    </div>
                                    {item.posting_title}
                                </CardTitle>
                                <CardText key={item.opening_id} className="">
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
                                            Shift:
                                        </span>{" "}
                                        {item.shift}
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

export default Test3;
