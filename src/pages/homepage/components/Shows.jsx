import React from "react";

const Shows = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <p className="text-white">No shows available.</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-40 m-18">
      {data.length > 0 ? (
        data.map((show, index) => (
          <div key={index} className="bg-gray-800 m-14 w-[250px] rounded-lg overflow-hidden hover:scale-110 transition duration-150 ease-in" >
            <img
              src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
              alt={show.name}
              className="w-full object-cover"
            />
          </div>
        ))
      ) : (
        <p className="text-white">No shows available.</p>
      )}
    </div>
  );
};

export default Shows