import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";

import Layout from "../components/layout";
import AppContext from "../appContext/index"
import { ImageBaseUrl } from "../utils/Baseurl";
import { getProjectList } from "../utils/api-Request";

function MyLearning() {
    const conntextApi = useContext(AppContext);
    const [myProject, setMyProject] = useState([]);

    const getProject = async () => {
        const project = await getProjectList();
        setMyProject(project?.data?.data);
    }

    useEffect(() => {
        getProject()
      }, []);

    return (
        <Layout>
            <div className="container cartcontainer"><h3>My Courses</h3></div>
            <div className="container">
              {myProject && myProject.length > 0 &&  
              myProject?.map((obj, i) => ( 
                <div
                    key={i}
                    className="card mb-3 bg-light border col-8 py-3 mt-5">
                    <div className="d-flex flex-wrap row g-0">
                        <div className="col-lg-3 col-md-3 col-12">
                            <Image
                                style={{ borderRadius: "20px" }}
                                src={ImageBaseUrl + obj?.bannerImage}
                                layout="responsive"
                                width={10}
                                height={10}
                                sizes={'10%'}
                                objectFit="fill"
                            />
                        </div>
                        <div className="col-lg-5 col-md-5 col-12" >
                            <h5 className="card-title p-2">{obj.projectTitle}</h5>
                            <p className="card-text mx-2">{obj.projectDesc}</p>
                            <span className="badge bg-danger mx-2 text-white">{obj?.plateform?.join(", ").replace("_"," ")}</span>
                        </div>  
                       {obj.plateform.includes('webgl') && obj.webGlFile &&  <div className="col-md-3 col-12 m-auto">
                            <div className="d-flex justify-content-end w-100">
                                <a className="btn btn-danger my-4 mr-3" href={`${ImageBaseUrl}/${obj.webGlFile}`} target="_blank" rel="noreferrer" data-toggle="tooltip" data-original-title="Play">
                                    Play
                                  </a>
                            </div>
                        </div>}

                    </div>
                </div>
              ))}
                {
                    (!myProject || myProject.length == 0) && 
                    <div>
                        No project
                    </div>
                }
            </div>

        </Layout>
    );

}

export default MyLearning;
