// import { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = (props) => {
  // const [body, setBody] = useState('');

  // const handleBody=(e)=>{
  //     setBody(e);
  // }

  return (
    <ReactQuill
      id="ql-editor"
      style={{
        background: "#fff",
        color: "black",
      }}
      theme="snow"
      value={this.html}
      placeholder="Write something..."
      modules={TextEditor.modules}
      formats={TextEditor.formats}
      onChange={props.handleChange}
    />
  );
};

TextEditor.modules = {
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
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "sub",
  "super",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
];

export default TextEditor;
