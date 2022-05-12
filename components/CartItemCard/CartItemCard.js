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
      className="card mb-3 "
      style={{ }}
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
        <h6 className="mx-2">Quantity:{quantity}</h6>
        </div>

        <div className="col-lg-2 col-md-10 col-12" >
         <h4 className="mx-2">$ {price}</h4>
           <div className="d-flex flex-row justify-content-start">
              <button
                className="removeItem"
                onClick={() => handleRemove(id, type)}
                >
                Remove Item
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default CardItem;
