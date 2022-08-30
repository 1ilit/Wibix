import React, { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { urlRes } from "../endpoints";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewSchool = () => {
  const { schoolId } = useParams();
  const [school, setSchool] = useState([]);
  const [courses, setCourses] = useState([]);
  const [mode, setMode] = useState("popular");
  const [searchStr, setSearchStr] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const navigate=useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response1 = await axios.get(`${urlRes}/Schools/${schoolId}`);
      setSchool(response1.data);
      var path = "";
      switch (mode) {
        case "popular":
          path = "PopularCourses";
          break;
        case "all":
          path = "AllInSchool";
          break;
        default:
          path = "PopularCourses";
          break;
      }
      const response2 = await axios.get(`${urlRes}/${path}/${schoolId}`);
      console.log(response2);
      setCourses(response2.data);
    };
    getData();
  }, [mode, schoolId]);

  const handleChange = (e) => {
    setSearchStr(e.target.value);
    console.log(searchStr);
    const newFilter = courses.filter((value) => {
      return value.courseName.toLowerCase().includes(searchStr.toLowerCase());
    });

    setFilteredData(newFilter);
    
  };

  const handleCourseSearch = async (e) => {
    e.preventDefault();

    await axios
      .get(`${urlRes}/SSD/${searchStr}/${schoolId}`)
      .then((response) => {
        console.log(response);
        navigate(`/resources/schools/courses/${response.data}`);
      })
      .catch((error) => navigate("/courseNotFound"));
    // courses?.forEach((c)=>{
    //   if(c.courseName.toLowerCase()===searchStr.toLowerCase()){
    //     navigate(`/resources/schools/courses/${c.id}`);
    //   }
    // });
  };


  const clearFilter = () => {
    setSearchStr("");
    setFilteredData([]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <p>
          <Link to="/resources" className="wibix-link">
            Schools
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          {school.name}
        </p>
        <hr />

        <div className="my-4 li-accent">
          <div className="ms-4">
            <h1>{school.name}</h1>
            <p>
              Total resources available: {school.numberOfRes} | Total Courses
              Registered: {school.courses?.length}
            </p>
          </div>
        </div>
        <hr />

        <div className="my-2">
          <button
            type="button"
            className={
              mode === "popular"
                ? "me-1 h6 modes wibix-link px-3 py-2 underlined"
                : "me-1 h6 modes wibix-link px-3 py-2"
            }
            onClick={() => setMode("popular")}
          >
            Popular
          </button>
          <button
            type="button"
            className={
              mode === "all"
                ? "mx-1 h6 modes wibix-link px-3 py-2 underlined"
                : "mx-1 h6 modes wibix-link px-3 py-2"
            }
            onClick={() => setMode("all")}
          >
            All
          </button>
        </div>

        <div className="my-4 d-flex no-wrap">
          {courses.map((c, key) => {
            return (
              <div className="me-3 bg-light border border-muted p-3 w-md-20">
                <Link
                  to={`/resources/schools/courses/${c.id}`}
                  className="fw-bold wibix-link"
                >
                  {c.courseName}
                </Link>
                <p className="text-muted">
                  Number of resources: {c.numberOfRes}
                </p>
              </div>
            );
          })}
        </div>
          

          <div className="text-center mt-5">
              <h4>Search for your course</h4>
          </div>
        <form className="my-4">
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-3 w-40"
              placeholder="UBI202"
              onChange={handleChange}
              id="input"
            />
            <button
              className="btn-burnt-umber my-2 my-sm-0 px-3 py-2"
              type="button"
              onClick={handleCourseSearch}
              id="search-button"
            >
              Search
            </button>
          </div>

          {filteredData.length !== 0 && (
            <div className="bg-light border border-muted w-50 mx-auto my-2">
              <div className="text-end">
                <button
                  type="button"
                  className="px-2"
                  onClick={clearFilter}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              {filteredData.map((s, key) => {
                return (
                  <div className="bg-white m-2 p-2 text-start">
                    <Link
                      className="wibix-link p-2"
                      to={`/resources/schools/courses/${s.id}`}
                    >
                      {s.courseName}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </form>


      </div>
      <Footer />
    </>
  );
};

export default ViewSchool;
