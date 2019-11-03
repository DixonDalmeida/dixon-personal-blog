import React from "react"

import "./header.css"
import dj from "../../images/dj.jpg"

const MobileBio = (props) => {

    return (
        <div className="heading">
            <br/>
            <h4 className="heading">{props.author}</h4>
        </div>
    )
}

export default MobileBio