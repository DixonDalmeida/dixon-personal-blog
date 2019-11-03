import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
    return (
        <div className="mobile-pages-main">
                <b><li className="d-inline p-4">Dixon Almeida</li></b>
                <br/>
                <li className="d-inline p-4">Expert Devops/Kubernetes Engineer</li>
                <br/>
                <br/>
                <li className="d-inline p-4"><Link to="/"><span class="btn btn-info" >Blog</span></Link></li>
                <li className="d-inline p-4"><Link to="/vlog"><span class="btn btn-info">Vlog</span></Link></li>
                <li className="d-inline p-4"><Link to="/about"><span class="btn btn-info"className="text-dark">About</span></Link></li>
        </div>
    )
}

export default MobilePages


