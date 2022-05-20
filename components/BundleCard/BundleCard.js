import React, { useContext } from "react";
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
}) {
  const appContext = useContext(AppContext)
  const { fetchBundleList } = appContext
  const images = image?.split("/");
  const imgsrc = images ? encodeURI(images[1]) : "";

  const handleRemove = async (id) => {
    try {
      const data = {
        sessionId: getSession(),
        id: id,
        type: "project",
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
            <div className="d-flex flex-row align-items-baseline mb-4">
              <span className="badge bg-danger mx-2 text-white">{plateform}</span>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <button
                className="btn btn-link text-danger"
                onClick={() => handleRemove(id, type)}
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

export default BundleCard;
