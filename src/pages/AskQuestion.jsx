import React from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Tag from "../components/Tag";
import katex from "katex";
import "katex/dist/katex.min.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { urlForum } from "../endpoints";
import { useState } from "react";

window.katex = katex;

const AskQuestion = () => {
  // const [math, setMath] = useState(false);
  // const [advMath, setAdvMath] = useState(false);
  // const [bio, setBio] = useState(false);
  // const [chem, setChem] = useState(false);
  // const [phys, setPhys] = useState(false);
  // const [cs, setCs] = useState(false);
  // const [eng, setEng] = useState(false);
  // const [other, setOther] = useState(false);
  const [html, setHtml] = useState("");
  const [title, setTitle] = useState("");

  const navigate=useNavigate();

  function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  const submit = async (e) => {
    e.preventDefault();
    var response = await axios.post(`${urlForum}/AddPost`, {
      heading: title,
      body: html
    });
    console.log(response);
    delay(2000);
    navigate("/forum");
  };

  return (
    <>
      <Navbar />
      <div className="ask-header">
        <div id="ask-image"></div>
        <div className="layer p-0 m-0"></div>
        <h2 className="text-white position-absolute bottom-0 start-0 ms-5 mb-4 ps-md-5 fw-bold">
          Hey, what's on your mind?
        </h2>
      </div>
      <div className="row m-0">
        <div className="col-md-7 ms-md-5 p-5">
          <p className="d-md-none text-muted">
            *Kindly refer to 'How to ask' at the bottom of the page*
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="title" className="fw-bold">
                Title
              </label>
              <p className="text-muted">
                Be specific and imagine you're asking a question to another
                person.
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="How to center a div?"
                id="title"
                value={title || ""}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="editor" className="fw-bold">
                Body
              </label>
              <p className="text-muted">
                Include all the information someone would need to answer your
                question.
              </p>
              <ReactQuill
                id="ql-editor"
                style={{
                  background: "#fff",
                  color: "black",
                }}
                theme="snow"
                value={html}
                placeholder="Write something..."
                modules={AskQuestion.modules}
                formats={AskQuestion.formats}
                onChange={(e) => {
                  console.log(e);
                  setHtml(e);
                }}
              />
            </div>
            {/* <div className="my-3 form-group">
              <p className="fw-bold">Tags</p>
              <div className="d-flex flex-wrap">
                <Tag
                  category="Mathematics"
                  selected={math}
                  select={() => setMath(!math)}
                />
                <Tag
                  category="Advanced Mathematics"
                  selected={advMath}
                  select={() => setAdvMath(!advMath)}
                />
                <Tag
                  category="Biology"
                  selected={bio}
                  select={() => setBio(!bio)}
                />
                <Tag
                  category="Chemistry"
                  selected={chem}
                  select={() => setChem(!chem)}
                />
                <Tag
                  category="Physics"
                  selected={phys}
                  select={() => setPhys(!phys)}
                />
                <Tag
                  category="Computer Science"
                  selected={cs}
                  select={() => setCs(!cs)}
                />
                <Tag
                  category="Engineering"
                  selected={eng}
                  select={() => setEng(!eng)}
                />
                <Tag
                  category="Other"
                  selected={other}
                  select={() => setOther(!other)}
                />
              </div>
            </div> */}
            <button
              type="button"
              className="btn-burnt-umber px-3 py-2 mt-2 mx-1"
              onClick={submit}
            >
              Post Question
            </button>
          </form>
        </div>

        <div className="col-md-4 mt-2 p-5">
          <Accordion />
        </div>
      </div>

      <Footer />
    </>
  );
};

AskQuestion.modules = {
  toolbar: [
    [{ header: 1 }, { header: 2 }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ script: "sub" }, { script: "super" }],
    ["link", "image", "video", "formula"],
    ["clean"],
    ["code-block"],
  ],
};

export default AskQuestion;
