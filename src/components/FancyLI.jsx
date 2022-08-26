import React from "react";

const FancyLI = (props) => {
  return (
    <>
      <div className="m-3 position-relative">
        <div className="text-white fw-bold li-circle position-absolute top-0 start-0">{props.number}</div>
        <div className="bg-white w-100 rounded li-text border border-muted">
            <p className="ms-5">
                {props.text}
            </p>
        </div>
      </div>
    </>
  );
};

export default FancyLI;
