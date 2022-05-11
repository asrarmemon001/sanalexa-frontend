import { getApi, getApiWithoutToken, postApiWithoutToken } from "./api-interface";

export const projectList = (data) =>{
   return postApiWithoutToken(`/api/projects/web/list`, data)
}

export const projectListFeatured = (data) =>{
   return getApiWithoutToken(`/api/projects/web/featured-list?limit=${data.limit}&page=${data.page}&search=${data.search}`)
}

export const packageList = (data) =>{
   return getApiWithoutToken(`/api/packages/web/list`)
}

export const sectorList = () => {
   return getApiWithoutToken(`/api/sectors/web/list`)
}


export const loginUser = (data) =>{
   return postApiWithoutToken(`/api/webUser/login`, data)
}

export const registerUser = (data) =>{
   return postApiWithoutToken(`/api/webUser/register`, data)
}

export const getUser = (data) =>{
   return getApi(`/api/users/getuser`)
}