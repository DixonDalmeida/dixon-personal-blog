import React from "react"

import "./header.css"
import dj from "../../images/dj.jpg"

const MobileBio = (props) => {

    return (
            <header class="mobile-bio-main">
            <img src={dj}  className="ml-4 mt-4" style={{ maxWidth: `75px`, maxHeight: `75px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
         
            </header>
    )
}

export default MobileBio