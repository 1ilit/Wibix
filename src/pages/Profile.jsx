import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileEdit from "../components/ProfileEdit";
import ProfileMain from "../components/ProfileMain";
import ProfilePosts from "../components/ProfilePosts";
import axios from "axios";
import { urlAccount } from "../endpoints";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const [section, setSection] = useState("profile");
  const [component, setComponent] = useState(<ProfileMain data={props.data} />);

  const navigate = useNavigate();

  useEffect(() => {
    switch (section) {
      case "profile":
        setComponent(<ProfileMain data={props.data} />);
        break;
      case "posts":
        setComponent(<ProfilePosts data={props.data} />);
        break;
      case "edit":
        setComponent(<ProfileEdit data={props.data} />);
        break;
      default:
        setComponent(<ProfileMain data={props.data} />);
        break;
    }
  }, [section]);

  const deleteAccount = async () => {
    let text =
      "Are you sure you want to delete your account? \nPress OK to confirm.";
    const config = {
      headers: {
        Authorization: "Bearer " + props.data.token,
      },
    };
    if (window.confirm(text) === true) {
      await axios
        .delete(`${urlAccount}/DeleteUser/${props.data?.user?.id}`, config)
        .then((res) => {
          console.log(res);
          localStorage.clear();
          navigate("/signup");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Navbar data={props.data} />
      <div className="container my-4">
        <h3 className="fw-bold my-4">User Profile</h3>
        <div className="row">
          <div className="col-md-3">
            <p className="li-accent p-3 bg-light">
              <a
                href="#0"
                onClick={(e) => setSection("profile")}
                className={
                  section === "profile"
                    ? "fw-bold wibix-link"
                    : "fw-bold wibix-link no-decor"
                }
              >
                Profile
              </a>
            </p>
            <p className="li-accent p-3 bg-light">
              <a
                href="#0"
                onClick={(e) => setSection("posts")}
                className={
                  section === "posts"
                    ? "fw-bold wibix-link"
                    : "fw-bold wibix-link no-decor"
                }
              >
                Posts
              </a>
            </p>
            <p className="li-accent p-3 bg-light">
              <a
                href="#0"
                onClick={(e) => setSection("edit")}
                className={
                  section === "edit"
                    ? "fw-bold wibix-link"
                    : "fw-bold wibix-link no-decor"
                }
              >
                Edit profile
              </a>
            </p>
            <p>
              <button
                onClick={deleteAccount}
                className="btn-burnt-umber px-3 py-2 my-3"
              >
                Delete Account
              </button>
            </p>
          </div>
          <div className="col-md-9">{component}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
