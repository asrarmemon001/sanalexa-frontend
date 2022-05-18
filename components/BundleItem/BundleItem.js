import Image from 'next/image'
import React from 'react'
import { ImageBaseUrl } from '../../utils/Baseurl';

function BundleItem({
    projectDesc,
    img,
    projectTitle    
}) {
    const images = img?.split("/");
    const imgsrc = images ? encodeURI(images[1]) : "";  
    
  return (
      
    <div className="card col-lg-4" style={{maxWidth:"18rem"}}>
    <Image src={`${ImageBaseUrl}Images/${imgsrc}`} width="120px" height="120px"/>
    <div className="card-body">
        <h5>{projectTitle}</h5>
      <p className="card-text">{projectDesc}</p>
    </div>
  </div>
  )
}

export default BundleItem