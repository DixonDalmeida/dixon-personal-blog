import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i><b>Dixon Joseph Dalmeida is Lead DevOps Engineer.</b>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Dixon has production level experience in Kubernetes ( AKS, IKS, EKS).</p>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Dixon writes various articles and Vlogs in LinkendIn.</p>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span> 
                            <p className="d-inline-block ml-3 w-75 align-top">Experience in building end to end DevOps workflow using Jenkins, Chef, Spinnaker, Docker, Kubernetes ,Helm.</p>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Extensive experience in analysis of the business requirements and providing end to end solution to customer from solution architecture and design to deployment and distribution strategy based on the product.</p>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Extensive experience in end to end delivery of project from making POCs, requirements gathering, system architecture, design and implementation . Excellent time management skills with ability to perform under pressure & meet deadlines.</p>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Experience in solving  production issues under pressure.</p>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span> 
                            <p className="d-inline-block ml-3 w-75 align-top">Experience managing the DevOps Squad by issuing tasks, empowering the team members, Solving issues.</p>
                            <br></br>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Experience in collaborating the Developer, Ops and Test team.</p>
                            <br></br>
</i></p>
                        <br />
                        <h4>Features</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Blazing fast, as you'd expect from a Gatsby site</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Tech tags designed for web developers</p>
                            <div className="ml-5">
                                <TechTag tag="react" tech="React" name="DiReact" size={20} color="deepskyblue" />
                                <TechTag tag="nodejs" tech="Node.js" name="DiNodejsSmall" size={20} color="lightgreen" />
                                <TechTag tag="html" tech="HTML" name="FaHtml5" size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name="DiCss3Full" size={20} color="teal" />
                            </div>  
                        </div>
                        <div className="mt-4">
                            <span className="text-success d-inline-block" title="prism">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Includes Prism for code block styling in markdown files</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="icons">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Developer-relevant social-media icon links including GitHub, Stack Overflow and freeCodeCamp</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="mobile">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Mobile responsive, of course</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage

