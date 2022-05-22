import React, { useState } from "react";
import Image from "next/image";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { RemoveCartItem } from "../../utils/api-Request";

function CardItem({
  image,
  desc,
  title,
  id,
  type,
  plateform,
  price,
  project,
  handleRemove
}) {
  const images = image?.split("/");
  const imgsrc = images ? encodeURI(images[1]) : "";
  const [list, setList] = useState(false)

  return (
    <div
      className={`card mb-3 border p-4 bg-light`}
      style={{}}
    >
      <div className="d-flex flex-wrap row g-0 cartlist">
        <div className="col-lg-2 col-md-2 col-12">
          <Image
            style={{ borderRadius: "0px" }}
            src={`${ImageBaseUrl}Images/${imgsrc}`}
            layout="responsive"
            width={10}
            height={10}
            objectFit="fill"
          />
        </div>
        <div className="col-lg-5 col-md-6 col-12" >
          <h5 className="card-title p-2">{title}</h5>
          <p className="card-text mx-2">{desc}</p>
          <span className="badge bg-danger mx-2 text-white">{type}</span>
          <span className="badge bg-danger mx-2 text-white">{plateform}</span>
        </div>
        <div className="col-lg-3 col-md-10 col-12" >
          {/* <h6 className="mx-2">Quantity:{quantity}</h6> */}

        </div>

        <div className="col-lg-2 col-md-10 col-12" >
          <h4 className="mx-2">₹ {price}</h4>
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
                  <div className="border px-2 pt-4">
                    {project.map((el, i) => {
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
                    })}
                  </div>
                </div>
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

export default CardItem;


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