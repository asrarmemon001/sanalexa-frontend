import React, { useContext, useState } from "react";
import Image from "next/image";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { removeItemBundleList } from "../../utils/api-Request";
import { getSession } from "../../utils/constants";
import { toast } from "react-toastify";
import AppContext from "../../appContext";

function BundleCard({
  image,
  desc,
  title,
  id, 
  type,
  plateform, 
  project,
  selectServices
}) {
  const appContext = useContext(AppContext)
  const { fetchBundleList } = appContext;
  const [list, setList] = useState(false)
  const images = image?.split("/");
  const imgsrc = images ? encodeURI(images[1]) : "";

  const handleRemove = async (id, type) => {
    try {
      const data = {
        sessionId: getSession(),
        id: id,
        type,
      };
      const res = await removeItemBundleList(data)
      if (res.status == 200) {
        toast.success("successfully Removed")
        fetchBundleList()
      }

    } catch (error) {
      toast.error("something went wrong")
      console.log(error, 'handleRemove bundle')
    }
  };
  return (
    <div
      className="card mb-3 bg-light border col-12 py-3">
      <div className="d-flex flex-wrap row g-0">
        <div className="col-lg-2 col-md-2 col-12">
          <Image
            style={{ borderRadius: "20px" }}
            src={`${ImageBaseUrl}Images/${imgsrc}`}
            layout="responsive"
            width={10}
            height={10}
            objectFit="fill"
          />
        </div>
        <div className="col-lg-5 col-md-5 col-12" >
          <h5 className="card-title p-2">{title}</h5>
          <p className="card-text mx-2">{desc}</p>
          <span className="badge bg-danger mx-2 text-white">{type}</span>
          <span className="badge bg-danger mx-2 text-white">{plateform}</span>
        </div>
        <div className="col-lg-3 col-md-3 col-12" >
        {selectServices?.length
            ?
            <>
              <h6 className="mx-2">Selected Services</h6>
              {selectServices.map(el => {
                return <span key={`pservice-${el.id}`} className="badge mx-2 text-dark text-left d-block">{el.name} - ₹{el.price}</span>
              })}

            </>
            :
            null}
        </div>
        <div className="col-lg-2 col-md-2 col-12" >
        
            
            <div className="d-flex flex-row justify-content-start">
              <button
                className="removeItem"
                onClick={() => handleRemove(id, type)}
              >
                Remove Item
              </button>
            </div>
        
        </div>
        {type == "package"
          ?
          <>
            <div className="col-12 mt-4" >
              {/* <h6 className="mx-2">Quantity:{quantity}</h6> */}
              <div className="tophead" onClick={() => setList(!list)}>
                <div className="container">
                  <h3 className="text-center">list of items</h3>
                </div>
                <i className={`fa fa-caret-${list ? `up` : `down`}`} aria-hidden="true"></i>
              </div>
            </div>
            {list ? <div className="list-panel col-12">
              <div className="col-12">
                {/* <div className="col-12 py-4"> */}
                  <div className="border px-2 pt-4 row">
                    {project && project.length
                    ?
                    project.map((el, i) => {
                      return (<AccordianItem
                        classes={`col-lg-3 col-md-4 col-12`}
                        key={`listofi-${i}`}
                        image={el.bannerImage}
                        desc={el.projectDesc}
                        title={el.projectTitle}
                        id={el.id}
                        type={'project'}
                        plateform={el.plateform}
                        price={el.price}
                      />)
                    })
                  :
                  ''}
                  </div>
                {/* </div> */}
              </div>
            </div> : null}
          </>
          :
          null
        }

      </div>
    </div>
  );
}

export default BundleCard;



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
        <span className="badge bg-danger mx-2 text-white">{type}</span>
        <span className="badge bg-danger mx-2 text-white mb-2">{plateform}</span>
        {/* <h4 className="mx-2">₹ {price}</h4> */}
      </div>

    </div>
  </div>)
}