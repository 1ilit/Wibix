import React from "react";
import { urlRaw } from "../endpoints";

const ProfileMain = (props) => {
  return (
    <>
      <div className="px-5">
        <h4 className="mb-4 fw-bold">Your Account</h4>
        <div className="mb-5">
          <img
            src={
              props.data?.user.imageSrc
                ? `${urlRaw}/Uploads/${props.data?.user.imageSrc}`
                : "https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
            }
            alt="profile pic"
            height="300"
            className="border rounded-circle"
          />
          <h3 className="my-4 fw-bold">{props.data?.user.displayName}</h3>
          <h5 className="my-4 fw-bold text-muted">@{props.data?.user.userName}</h5>
          <p className="h5 mb-4 w-md-50">{props.data?.user.bio}</p>
          <p>{props.data?.user.email} <span className="text-muted">(this is not visible to others)</span></p>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
