import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";

import Layout from "../components/layout";
import AppContext from "../appContext/index"
import { ImageBaseUrl } from "../utils/Baseurl";
import { getProjectAndPackage } from "../utils/api-Request";
import { NoDataFound } from "../components/NoDataFound/NoDataFound";

function MyLearning() {

    const conntextApi = useContext(AppContext);
    const {
        playTypeModal
    } = conntextApi;
    const [myProject, setMyProject] = useState([]);
    const [myPackages, setMyPackages] = useState({});
    const [list, setList] = useState(true)

    const getProject = async () => {
        const project = await getProjectAndPackage();
        console.log(project);
        setMyProject(project?.data?.data.projects);
        setMyPackages(project?.data?.data.packages);
    }

    useEffect(() => {
        getProject()
    }, []);

    return (
        <Layout>
            <div className="container cartcontainer"><h3>My Courses</h3></div>
            <div className="container">
                {
                    myPackages && Object.keys(myPackages).length > 0 &&
                    <div>
                        <div>
                            {
                                Object.keys(myPackages).map((key) => (
                                    <div key={`package_` + key}>
                                        <div className="row pt-4 d-flex flex-wrap row g-0 cartlist">
                                            <div className="col-lg-2 col-md-2 col-12">
                                                <Image
                                                    style={{ borderRadius: "0px" }}
                                                    src={`${ImageBaseUrl}${myPackages[key].bannerImage}`}
                                                    layout="responsive"
                                                    width={10}
                                                    height={10}
                                                    objectFit="fill"
                                                />
                                            </div>
                                            <div className="col-8" >

                                                <h5 className="card-title p-2">{myPackages[key].packagesName}</h5>
                                                {/* <p className="card-text mx-2">{desc}</p> */}
                                                {/* {plateform && plateform.length > 0 &&
                                            plateform.map((obj) => (
                                                <span key={obj} className="badge bg-danger mx-2 text-white">{obj}</span>
                                            ))} */}
                                            </div>

                                            <div className="col-12" >
                                                {/* <h6 className="mx-2">Quantity:{quantity}</h6> */}
                                                <div className="tophead" onClick={() => setList(!list)}>
                                                    <div className="container">
                                                        <h3 className="text-center">list of items</h3>
                                                    </div>
                                                    <i className={`fa fa-caret-${list ? `up` : `down`}`} aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            {list ? <div className="list-panel col-12">
                                                <div className="row">
                                                    <div className="col-12 py-4">
                                                        <div className="col-12">
                                                            <div className="border px-2 pt-4 row">
                                                                {myPackages[key].projects && myPackages[key].projects.length
                                                                    ?
                                                                    myPackages[key].projects.map((el, i) => {
                                                                        return (
                                                                            <AccordianItem
                                                                                classes={`col-lg-3 col-md-4 col-12`}
                                                                                key={`listofi-${i}`}
                                                                                image={el.bannerImage}
                                                                                desc={el.projectDesc}
                                                                                title={el.projectTitle}
                                                                                id={el.id}
                                                                                type={'project'}
                                                                                plateform={el.plateform}
                                                                                price={el.price}
                                                                            />
                                                                        )
                                                                    })
                                                                    :
                                                                    <NoDataFound message={"No modules found in this package"} />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : null}

                                        </div>
                                        {/* <div>{myPackages[key].packagesName}</div> */}
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                }
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
                                    {obj.plateform && obj.plateform.length > 0 &&
                                        obj.plateform.map((o) => (
                                            <span key={o} className="badge bg-danger mx-2 text-white">{o}</span>
                                        ))}
                                </div>
                                <div className="col-md-3 col-12 m-auto">
                                    <div className="d-flex justify-content-end w-100">
                                        <button className="btn btn-danger my-4 mr-3 text-white" target="_blank" rel="noreferrer" onClick={(e) => playTypeModal('play', obj)} data-toggle="tooltip" data-original-title="Play">
                                            Play
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}

                {
                    (!myProject || myProject.length == 0) && (!myPackages && Object.keys(myPackages).length == 0)
                    &&
                    <div>
                        No project
                    </div>
                }
            </div>

        </Layout>
    );

}

export default MyLearning;

const AccordianItem = ({
    image,
    desc,
    title,
    id,
    type,
    plateform,
    price,
    classes
}) => {
    const conntextApi = useContext(AppContext);
    const {
        playTypeModal
    } = conntextApi;
    const images = image?.split("/");
    const imgsrc = images ? encodeURI(images[1]) : "";
    return (<div
        className={`card mb-3 ${classes}`}
        style={{}}
    >
        <div className="d-flex flex-wrap row g-0 cartlist">
            <div className="col-12">
                <Image
                    style={{ borderRadius: "0px" }}
                    src={`${ImageBaseUrl}Images/${imgsrc}`}
                    layout="responsive"
                    width={10}
                    height={10}
                    objectFit="fill"
                />
            </div>
            <div className="col-12" >
                <h5 className="card-title p-2">{title}</h5>
                <p className="card-text mx-2">{desc}</p>
                {/* <span className="badge bg-danger mx-2 text-white">{type}</span> */}

                {plateform && plateform.length > 0 &&
                    plateform.map((obj) => (
                        <span key={obj} className="badge bg-danger mx-2 text-white">{obj}</span>
                    ))}
                <div className=" m-auto">
                    <div className="d-flex justify-content-end w-100">
                        <button className="btn btn-danger w-100 text-white " target="_blank" rel="noreferrer" onClick={(e) => playTypeModal('play', {
                            image,
                            desc,
                            title,
                            id,
                            type,
                            plateform,
                            price,
                            classes
                        })} data-toggle="tooltip" data-original-title="Play">
                            Play
                        </button>
                    </div>
                </div>
                {/* <h4 className="mx-2">₹ {price}</h4> */}
            </div>

        </div>
    </div>)
}