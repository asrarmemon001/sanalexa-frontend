export const getToken = () => localStorage.getItem("token");
export const setToken = (token) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");
// export const setOrganization = (organizationId) => localStorage.setItem("selected_organization", organizationId);
// export const setDepartment = (departmentId) => localStorage.setItem("selected_department", departmentId); 