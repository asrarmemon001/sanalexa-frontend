import axios from "axios";
import { apiBaseUrl } from "./Baseurl";

export const postApiWithoutToken = (path, data) => {
  return axios.post(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch((error)=> {
    console.error(error);
  });
};

export const putApiWithoutToken = (path, data) => {
  return axios.put(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch((error)=> {
    console.error(error);
  });
};

export const getApiWithoutToken = (path) => {
  return axios.get(apiBaseUrl + path, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch((error)=> {
    console.error(error);
  });
};

export const postApi = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.post(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).catch((error)=> {
    console.error(error);
  });
};

export const getApi = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.get(apiBaseUrl + path, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }).catch((error)=> {
    console.error(error);
  });
};

export const putApi = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.put(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).catch((error)=> {
    console.error(error);
  });
};

export const fileUpload = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.post(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`
    }
  }).catch((error)=> {
    console.error(error);
  });
};

// export const deleteApi = (path:string, data?:any) => {
//   const token = localStorage.getItem("token");

//   return axios.delete(BaseUrl + path, data, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     }
//   });
// };
