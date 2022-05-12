import React from "react";
import Image from "next/image";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { RemoveCartItem } from "../../utils/api-Request";

function CardItem({
  image,
  desc,
  title,
  id,
  supportDesc,
  type,
  plateform,
  quantity,
  price,
  sessionId,
  handleRemove
}) {
  // there are spaces in image path thats why I am Encoding imagePath
  // const handleRemove = async (id, type) => {
  //   const data = {
  //     sessionId: sessionId ,
  //     id: id,
  //     type: "project",
  //   };
  //   console.log(id, type);
  //   const res = await RemoveCartItem(data);
  //   return res;
  // };

  const images = image?.split("/");
  const imgsrc = images ? encodeURI(images[1]) : "";

  return (
    <div
      className="card mb-3"
      style={{ borderRadius: "20px", backgroundColor: "#f8f6f5" }}
    >
      <div className="d-flex flex-wrap row g-0">
        <div className="col-lg-4 col-md-4 col-12">
          <Image
            style={{ borderRadius: "20px" }}
            src={`${ImageBaseUrl}Images/${imgsrc}`}
            layout="responsive"
            width={10}
            height={10}
            objectFit="fill"
          />
        </div>
        <div className="col-lg-8 col-md-8 col-12" >
          <div>
            <div className="d-flex flex-row justify-content-between">
              <h5 className="card-title p-2">{title}</h5>
            </div>
            <p className="card-text mx-2">{desc}</p>
            <div className="d-flex flex-row align-items-baseline">
              <h4 className="mx-2">$ {price}</h4>
              <h6 className="mx-2">Quantity:{quantity}</h6>
              <span className="badge bg-danger mx-2 text-white">{type}</span>
              <span className="badge bg-danger mx-2 text-white">{plateform}</span>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <button
                className="btn btn-danger mx-2 mb-3"
                onClick={() => handleRemove(id, type)}
                style={{ borderRadius: "20px" }}
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
