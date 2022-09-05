import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { urlRes } from "../endpoints";
import ReactQuill from "react-quill";

const initialValues = {
  title: "",
  courseName: "",
  school: "",
  description: "",
  file: null,
};

const PostResource = (props) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const allowedFiles = ["application/pdf"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleEditor = (e) => {
    if (e !== null)
      setValues({
        ...values,
        description: e,
      });
  };

  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let doc = e.target.files[0];
      if (allowedFiles.includes(doc.type)) {
        const reader = new FileReader();
        reader.onload = (x) => {
          setValues({
            ...values,
            file: doc,
          });
        };
        reader.readAsDataURL(doc);
      } else {
        applyErrorClass("file");
      }
    }
  };

  const validate = () => {
    let temp = {};
    temp.title = values.title === "" ? false : true;
    temp.courseName = values.courseName === "" ? false : true;
    temp.school = values.school === "" ? false : true;
    temp.description = values.description === "" ? false : true;
    temp.file = values.file === null ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] === false ? " invalid-field" : "";

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    document.getElementById("document").value = null;
  };

  //   const handleRedirect = async (e) => {
  //     await axios
  //       .get(`${urlRes}/SSD/${values.courseName}`)
  //       .then((response) => {
  //         console.log(response);
  //         navigate(`/resources/schools/courses/${response.data}`);
  //       })
  //       .catch((error) => navigate("/courseNotFound"));
  //   };

  const submit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("courseName", values.courseName);
      formData.append("description", values.description);
      formData.append("school", values.school);
      formData.append("file", values.file);

      const config = {
        headers: {
          Authorization: "Bearer " + props.data.token,
        },
      };

      await axios
        .post(`${urlRes}/Upload`, formData, config)
        .then((res) => {
          resetForm();
          navigate(-1); //change this
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Navbar data={props.data}/>
      <div className="ask-header">
        <div id="ask-image"></div>
        <div className="layer p-0 m-0"></div>
        <h2 className="text-white position-absolute bottom-0 start-0 ms-5 mb-4 ps-md-5 fw-bold">
          Thanks for sharing your resources
        </h2>
      </div>

      <div className="container my-4">
        <p>
          <Link to="/resources" className="wibix-link">
            Resources
          </Link>{" "}
          <i className="fa-solid fa-angles-right mx-2"></i>
          Share Resources
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className="bg-light border border-muted p-4">
              <h5 className="fw-bold">Academic Honesty Note</h5>
              <hr />
              <p className="px-3 py-2 bg-white li-accent">
                Wibix highly values academic honesty. <br />
                <br /> Before posting a document make sure that it's your work
                or you've been given the permission to share it.
              </p>

              <h5 className="fw-bold">Stay on topic</h5>
              <hr />
              <p className="px-3 py-2 bg-white li-accent">
                Post resources that are useful, like study notes, exams,
                quizzes, flash cards, etc. <br />
                <br /> Kindly refrain from sharing documents that can be
                considered irrelevant.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="px-5 py-3 bg-light border border-muted">
              <form onSubmit={submit}>
                <div className="form-group my-2">
                  <label htmlFor="title" className="my-1 fw-bold">
                    Title
                  </label>
                  <p className="text-muted">
                    Give a descriptive title to your post
                  </p>
                  <input
                    type="text"
                    id="title"
                    className={"form-control" + applyErrorClass("title")}
                    name="title"
                    placeholder="Title"
                    value={values.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="course-name" className="my-1 fw-bold">
                    Course Name
                  </label>
                  <p className="text-muted">
                    Which course is the document for? (ex. CS161)
                  </p>
                  <input
                    type="text"
                    id="course-name"
                    className={"form-control" + applyErrorClass("courseName")}
                    name="courseName"
                    placeholder="Course Name"
                    value={values.courseName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="school-name" className="my-1 fw-bold">
                    School Name
                  </label>
                  <p className="text-muted">
                    What school is the course taught at?
                  </p>
                  <input
                    type="text"
                    id="school-name"
                    className={"form-control" + applyErrorClass("school")}
                    name="school"
                    placeholder="School Name"
                    value={values.school}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="description" className="my-1 fw-bold">
                    Descripion
                  </label>
                  <p className="text-muted">What is the document about?</p>
                  {/* <textarea
                type="text"
                id="description"
                className={"form-control" + applyErrorClass("description")}
                name="description"
                placeholder="Description"
                value={values.description}
                onChange={handleInputChange}
              ></textarea> */}
                  <ReactQuill
                    id="ql-editor-post"
                    style={{
                      background: "#fff",
                      color: "black",
                    }}
                    className={applyErrorClass("description")}
                    theme="snow"
                    placeholder="Description"
                    modules={PostResource.modules}
                    formats={PostResource.formats}
                    onChange={handleEditor}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="document" className="my-1 fw-bold">
                    Document
                  </label>
                  <p className="text-muted">Attach the document here</p>
                  <input
                    type="file"
                    id="document"
                    className={"form-control" + applyErrorClass("file")}
                    name="file"
                    placeholder="Document"
                    onChange={handleFile}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-burnt-umber px-3 py-2 mt-3"
                >
                  Post Document
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

PostResource.modules = {
  toolbar: [
    [{ header: [3, 4, 5, 6] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["formula"],
    ["code-block"],
  ],
};

export default PostResource;
