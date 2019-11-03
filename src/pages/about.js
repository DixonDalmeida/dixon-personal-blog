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
            <SEO title="About" keywords={[`kubernetes`, `helm`, `jenkins`, `aws`, `azure`, `spinnaker`, `blog`]} />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" keywords={[`kubernetes`, `helm`, `jenkins`, `aws`, `azure`, `spinnaker`, `blog`]} />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i><b>Dixon Joseph Dalmeida is Lead DevOps Engineer and Kubernetes Specialist</b>
                        </i></p>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Dixon has production level experience in <b>Managed Kubernetes ( AKS, IKS, EKS).</b></p>
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
                        <br />
                        <h4>Technologies</h4>
                        <div className="ml-5">
                                <TechTag tag="devops" tech="DevOps" name="DiReact" size={20} color="deepskyblue" />
                                <TechTag tag="kubernetes" tech="Kubernetes" name="DiCssTricks" size={20} color="deepskyblue" />
                                <TechTag tag="git" tech="Git" name="DiGitMerge" size={20} color="white" />
                                <TechTag tag="docker" tech="Docker" name="FaDocker" size={20} color="deepskyblue" />
                                <TechTag tag="jenkins" tech="Jenkins" name="FaJenkins" size={20} color="red" />
                                <TechTag tag="python" tech="Python" name="DiPython" size={20} color="deepskyblue" />
                                <TechTag tag="spinnaker" tech="Spinnaker" name="DiRuby" size={20} color="deepskyblue" />
                                <TechTag tag="aws" tech="AWS" name="FaAmazon" size={20} color="wheat" />
                                <TechTag tag="azure" tech="Azure" name="FaMicrosoft" size={20} color="red" />
                                <TechTag tag="monitoring" tech="Monitoring" name="FaHtml5" size={20} color="darkorange" />
                                <TechTag tag="golang" tech="Golang" name="FaGithubAlt" size={20} color="skyblue" />
                                <TechTag tag="linux" tech="Linux" name="FaLinux" size={20} color="green" />
                                <TechTag tag="helm" tech="Helm" name="DiCssTricks" size={20} color="deepskyblue" />
                        </div> 
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage

