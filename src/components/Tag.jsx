import React from "react";

const Tag = (props) => {
  return (
    <>
      <button
        type="button"
        className={
          !props.selected
            ? "px-3 py-2 m-2 bg-beige border rounded wibix-link tag"
            : "px-3 py-2 m-2 border rounded wibix-link tag"
        }
      >
        <span>
          {props.category}
          <i
            className={
              !props.selected
                ? "fa-solid fa-xmark ms-2"
                : "fa-solid fa-check ms-2"
            }
            onClick={props.select}
          ></i>
        </span>
      </button>
    </>
  );
};

export default Tag;
