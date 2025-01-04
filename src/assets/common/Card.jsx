import { useNavigate } from "react-router";

const Card = ({ item, type }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/details", {
          state: {
            id: item.id,
            type: type || item.media_type,
          },
        });
      }}
      className="relative bg-gray-800 m-14 w-[250px] rounded-lg overflow-hidden hover:scale-110 transition duration-150 ease-in group"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt={item.title || "Movie Poster"}
        className="w-full object-cover transition duration-300 ease-in group-hover:blur-sm group-hover:opacity-70"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 ease-in">
        <p className="text-white text-center font-bold">{item.overview}</p>
      </div>
    </button>
  );
};

export default Card;
