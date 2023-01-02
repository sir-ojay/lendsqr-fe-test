
export const personDetail = (id:string) => {
   return fetch(
     `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
   ).then((response) => response.json());
  } 