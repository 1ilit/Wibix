import React from "react";

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="border rounded-top">
        <h4 className="p-3 fw-bold">How to ask</h4>
        <p className="px-3">
          The community is here to help you with specific problems and inquires.
        </p>
        <p className="px-3">Avoid asking opinion-based questions.</p>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button bg-white fw-bold wibix-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            1. Summarize the problem
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul>
              <li>Describe the issue in detail</li>
              <li>Provide images or information that can be helpful</li>
              <li>Make it concise</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed bg-white wibix-link fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            2. Show what you've tried
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul>
              <li>Tell us how you tried to approach the problem</li>
              <li>Point out where the question lies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed bg-white wibix-link fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            3. Add tags
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
                Add tags by clicking on the cross, to make it easier for helpers to find your question
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
