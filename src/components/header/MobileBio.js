import React from "react"

import "./header.css"
import dj from "../../images/dj.jpg"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main">
            <br/>
            <h4 className="mr-1 mt-1">{props.author}</h4>
        </div>
    )
}

export default MobileBio