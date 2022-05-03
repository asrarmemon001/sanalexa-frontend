import { getApiWithoutToken } from "./api-interface";

export const projectList = (data) =>{
   const res =  getApiWithoutToken(`/api/projects/web/list?limit=${data.limit}&page=${data.page}&search=${data.search}`)
   return res
}