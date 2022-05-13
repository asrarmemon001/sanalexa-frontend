import { getApi, postApi, getApiWithoutToken, postApiWithoutToken } from "./api-interface";

export const projectList = (data) => {
   return postApiWithoutToken(`/api/projects/web/list`, data)
}

export const cartList = async (data) => {
   return await getApiWithoutToken(`/api/cart/list?sessionId=${data}`)
}
export const BundlesList = async (data) =>{
   const res = await getApiWithoutToken(`/api/bundle/list?sessionId=${data}`)
   console.log(res)
   return res
}

export const RemoveCartItem = async (data) => {
   return await postApiWithoutToken(`/api/cart/remove-cart`, data)
}

export const RemoveBundleList = async (data) =>{
   const res = await postApiWithoutToken(`/api/bundle/remove-bundle`,data)
   console.log(res)
   return res
}

export const projectListFeatured = (data) =>{
   return getApiWithoutToken(`/api/projects/web/featured-list?limit=${data.limit}&page=${data.page}&search=${data.search}`)
}

export const packageList = (data) => {
   return getApiWithoutToken(`/api/packages/web/list`)
}

export const sectorList = () => {
   return getApiWithoutToken(`/api/sectors/web/list`)
}


export const loginUser = (data) => {
   return postApiWithoutToken(`/api/webUser/login`, data)
}

export const AddtoCart = async (data) => {
   return await postApiWithoutToken(`/api/cart/add-to-cart`, data)
}

export const AddtoBundle = async(data) =>{
   const res= await postApiWithoutToken(`/api/cart/add-to-bundle`, data)
   return res
}

export const registerUser = (data) =>{
   return postApiWithoutToken(`/api/webUser/register`, data)
}

export const getUser = (data) => {
   return getApi(`/api/users/getuser`)
}
