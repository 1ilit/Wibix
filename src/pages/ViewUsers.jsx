import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { urlAccount } from "../endpoints";
import axios from "axios";
import UserLi from "../components/UserLi";

const ViewUsers = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${urlAccount}/Users`)
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    };
    getData();
  });

  return (
    <>
      <Navbar data={props.data} />
      <div className="ask-header mb-3">
        <div id="ask-image"></div>
        <div className="layer p-0 m-0"></div>
        <h2 className="text-white position-absolute bottom-0 start-0 ms-5 mb-4 ps-md-5 fw-bold">
          <span className="ms-md-4">Our Users</span>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {users.slice((2 * users.length) / 3, users.length).map((v, i) => {
              return (
                <UserLi
                  key={i}
                  id={v.id}
                  userName={v.userName}
                  displayName={v.displayName}
                  bio={v.bio}
                  rating={v.rating}
                  imageSrc={v.imageSrc}
                />
              );
            })}
          </div>
          <div className="col-md-4">
            {users
              .slice(users.length / 3, (2 * users.length) / 3)
              .map((v, i) => {
                return (
                  <UserLi
                    key={i}
                    id={v.id}
                    userName={v.userName}
                    displayName={v.displayName}
                    bio={v.bio}
                    rating={v.rating}
                    imageSrc={v.imageSrc}
                  />
                );
              })}
          </div>
          <div className="col-md-4">
            {users.slice(0, users.length / 3).map((v, i) => {
              return (
                <UserLi
                  key={i}
                  id={v.id}
                  userName={v.userName}
                  displayName={v.displayName}
                  bio={v.bio}
                  rating={v.rating}
                  imageSrc={v.imageSrc}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewUsers;
