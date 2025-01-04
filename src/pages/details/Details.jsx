// import { useLocation } from "react-router";
// import { useStore } from "zustand";
// import { themeStore } from "../../assets/common/Store.js";
// import { useEffect, useState } from "react";

// const Details = () => {

//   const [error, setError] = useState(null);
//   const { token } = useStore(themeStore);
//   const { id, type } = useLocation().state;

//   const getDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/details`, {
//         headers: {
//           "Accept": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setDetailsData(data.content);
//       } else {
//         setError('Failed to fetch details.');
//       }
//       console.log(data)
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     getDetails()
//   }, [id, type]);


//   return (
//     <div className="pb-10">
//       SALAM
//     </div>
//   );
// };

// export default Details;
