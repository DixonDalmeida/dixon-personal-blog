import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
    return (
        <div className="mobile-pages-main">
            <ul >
                <b><li className="d-inline p-4">Dixon Almeida</li></b>
                <br/>
                <li className="d-inline p-4">Expert Devops/Kubernetes Engineer</li>
                <br/>
                <li className="d-inline p-4"><Link to="/"><span className="text-dark">Blog Home</span></Link></li>
                <br/>
                <li className="d-inline p-4"><Link to="/vlog"><span className="text-dark">Vlog Home</span></Link></li>
                <br/>
                <li className="d-inline p-4"><Link to="/about"><span className="text-dark">About</span></Link></li>
            </ul>
        </div>
    )
}

export default MobilePages


