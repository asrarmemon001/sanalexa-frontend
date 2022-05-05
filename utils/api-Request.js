import { getApiWithoutToken } from "./api-interface";

export const projectList = (data) =>{
   const res =  getApiWithoutToken(`/api/projects/web/list?limit=${data.limit}&page=${data.page}&search=${data.search}`)
   return res
}

export const projectListFeatured = (data) =>{
   const res =  getApiWithoutToken(`/api/projects/web/featured-list?limit=${data.limit}&page=${data.page}&search=${data.search}`)
   return res
}

export const packageList = (data) =>{
   const res =  getApiWithoutToken(`/api/packages/web/list`)
   return res
}

export const sectorList = () => {
   const res = getApiWithoutToken(`/api/sectors/web/list`)
   return res
}