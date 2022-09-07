import React, { useState } from "react";
import { urlAccount } from "../endpoints";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileEdit = (props) => {
  const [bio, setBio] = useState(props.data?.user?.bio);
  const [email, setEmail] = useState(props.data?.user?.email);
  const [displayName, setDisplayName] = useState(props.data?.user?.userName);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const allowedFiles = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let doc = e.target.files[0];
      if (allowedFiles.includes(doc.type)) {
        const reader = new FileReader();
        reader.onload = (x) => {
          setValues({
            id: props.data?.user?.id,
            file: doc,
          });
        };
        reader.readAsDataURL(doc);
      } else {
        applyErrorClass("file");
      }
    }
  };

  // const validate = () => {
  //   let temp = {};
  //   temp.file = values.file === null ? false : true;
  //   setErrors(temp);
  //   return Object.values(temp).every((x) => x === true);
  // };

  const applyErrorClass = (field) =>
    field in errors && errors[field] === false ? " invalid-field" : "";

  const resetForm = () => {
    setValues({});
    setErrors({});
    document.getElementById("document").value = null;
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", values.id);
    formData.append("file", values.file);
    formData.append("bio", bio);
    formData.append("email", email);
    formData.append("displayName", displayName);

    const config = {
      headers: {
        Authorization: "Bearer " + props.data?.token,
      },
    };

    await axios
      .post(`${urlAccount}/UpdateProfile`, formData, config)
      .then((res) => {
        resetForm();
        alert("Your information has been successfully update. \n The changes will be displayed soon.")
        navigate(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="mb-5 border border-muted p-5 bg-light p-3">
        <h5>Edit profile</h5>
        <hr />
        <div className="mb-4">
          <form className="">
            <div className="form-group mb-3">
              <label className="text-muted text-start">
                Update your profile picture
              </label>
              <input
                type="file"
                id="document"
                className="form-control"
                name="file"
                placeholder="Document"
                onChange={handleFile}
              />
            </div>

            <div className="form-group my-3">
              <label className="text-muted text-start">Update your display name</label>
              <input
                name="name"
                id="name"
                className={"form-control" + applyErrorClass("name")}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <label className="text-muted text-start">Update your email</label>
              <input
                name="email"
                id="email"
                className={"form-control" + applyErrorClass("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label className="text-muted text-start">Update your bio</label>
              <textarea
                name="bio"
                id="bio"
                className="form-control"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>

            <button
              type="button"
              onClick={submit}
              className="btn-burnt-umber px-3 py-2 mt-3"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
