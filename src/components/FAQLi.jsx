import React from "react";

const FAQLi = (props) => {
  return (
    <>
      <div className="accordion mb-3 " id={"accordion" + props.num}>
        <div className="accordion-item li-accent br-l-0">
          <h2 className="accordion-header" id={"heading" + props.num}>
            <button
              className="accordion-button collapsed bg-white wibix-link fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + props.num}
              aria-expanded="false"
              aria-controls={"collapse" + props.num}
            >
              <p className="p-0 mb-0">
                <span className="logo-font me-3 h4 fw-bold">Q : </span>
                <a href="#0" className="no-decor wibix-link">
                  {props.question}
                </a>
              </p>
            </button>
          </h2>
          <div
            id={"collapse" + props.num}
            className="accordion-collapse collapse"
            aria-labelledby={"heading" + props.num}
            data-bs-parent={"accordion" + props.num}
          >
            <div className="accordion-body border-top bg-light">
              <p>
                <span className="logo-font h4 fw-bold"> A : </span>
                {props.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQLi;
