import React from "react";
import { urlRaw } from "../endpoints";

const UserLi = (props) => {
  return (
    <>
      <div className="accordion mb-3 " id={"accordion" + props.id}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={"heading" + props.id}>
            <button
              className="accordion-button collapsed bg-white wibix-link fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + props.id}
              aria-expanded="false"
              aria-controls={"collapse" + props.id}
            >
              <div className="p-0 mb-0 d-flex justify-content-start">
                <div>
                  <img
                    src={
                      props.imageSrc
                        ? `${urlRaw}/Uploads/${props.imageSrc}`
                        : "https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
                    }
                    alt="profile pic"
                    height="60"
                    className="border rounded-circle me-3"
                  />
                </div>
                <div>
                  <p className="wibix-link h5">{props.displayName}</p>
                  <p className="text-muted">Rating : {props.rating}</p>
                </div>
              </div>
            </button>
          </h2>
          <div
            id={"collapse" + props.id}
            className="accordion-collapse collapse"
            aria-labelledby={"heading" + props.id}
            data-bs-parent={"accordion" + props.id}
          >
            <div className="accordion-body border-top bg-light">
              <p>@{props.userName}</p>
              <p>{props.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLi;
