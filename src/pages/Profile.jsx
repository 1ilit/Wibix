import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { urlRaw , urlAccount} from "../endpoints";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const Profile = (props) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const allowedFiles = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let doc = e.target.files[0];
      if (allowedFiles.includes(doc.type)) {
        const reader = new FileReader();
        reader.onload = (x) => {
          setValues({
            id: props.data?.user.id,
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
    temp.file = values.file === null ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] === false ? " invalid-field" : "";

  const resetForm = () => {
    setValues({});
    setErrors({});
    document.getElementById("document").value = null;
  };

  const submitPfp = async (e) => {
    e.preventDefault();

    if (validate()) {
      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("file", values.file);

      const config = {
        headers: {
          Authorization: "Bearer " + props.data.token,
        },
      };

      await axios
        .post(`${urlAccount}/UploadPfp`, formData, config)
        .then((res) => {
          resetForm();
          navigate(0); //change this
        })
        .catch((err) => console.log(err));
    }
  };


  return (
    <>
      <Navbar data={props.data} />
      <div className="container">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4 text-center">
            <div className="mb-5">
              <img
                src={props.data?.user.imageSrc?
                   `${urlRaw}/Uploads/${props.data?.user.imageSrc}`:"https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
                    
                }
                alt="profile pic"
                height="300"
                className="border rounded-circle"
              />

              <h5 className="my-3">{props.data?.user.userName}</h5>
            </div>

            <hr />
            <div className="my-5">
              <h5 className="mb-3">Edit profile</h5>
              <div>
                <p className="text-muted text-start ms-3">
                  Update your profile picture
                </p>
                <form className="form-inline">
                  <div className="form-group my-2">
                  <input
                    type="file"
                    id="document"
                    className={applyErrorClass("file")}
                    name="file"
                    placeholder="Document"
                    onChange={handleFile}
                  />
                    <button type="button" onClick={submitPfp} className="btn-burnt-umber px-3 py-2">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
