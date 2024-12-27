import React from "react";
import NotFound from "../../../assets/images/NotFound.jpg";

const Movies = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-40 m-18">
      {data && Array.isArray(data) && data.length > 0 ? (
        data.map((movie, index) => (
          <div
            key={index}
            className="relative bg-gray-800 m-14 w-[250px] rounded-lg overflow-hidden hover:scale-110 transition duration-150 ease-in group"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title || "Movie Poster"}
              className="w-full object-cover transition duration-300 ease-in group-hover:blur-sm group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 ease-in">
              <p className="text-white text-center font-bold">{movie.overview}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-white">
          <img src={NotFound} alt="Not Found" className="w-64 h-64" />
        </div>
      )}
    </div>
  );
};

export default Movies;
