import React from "react";

function Blogs({ sections }) {
  return (
    <div className="container">
      <div className="row">
        {sections.map((section, index) => (
          <div
            key={index}
            className="col-md-3 mb- d-flex flex-column mx-auto align-items-center"
          >
            <div className="text-start">
              <h5 className="h3">{section.heading}</h5>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
