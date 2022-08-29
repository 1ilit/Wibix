import React from 'react'
import {Link} from "react-router-dom"
const SchoolLI = (props) => {
  return (
    <>
        <div className="border border-muted p-3 bg-light w-md-50 text-start">
          <h5>
            <Link to={`/resources/schools/${props.id}`} className="wibix-link fw-bold">
              {props.name}
            </Link>
          </h5>
          <p className="text-muted">
            {props.numberOfRes} Study Resources
          </p>
      </div>
    </>
  )
}

export default SchoolLI