import React from "react"

import "./header.css"
import dj from "../../images/dj.jpg"

const MobileBio = (props) => {

    return (
            <header class="mobile-bio-main">
            <img src={dj}  className="ml-4 mt-2" style={{ maxWidth: `75px`, maxHeight: `75px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
            <b><h4 className="my-4 pl-3 px-4 mb-3">{props.author}</h4></b>
            </header>
    )
}

export default MobileBio