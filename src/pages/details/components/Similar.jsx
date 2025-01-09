import { themeStore } from "../../../assets/common/Store";
import Button from "../../../assets/common/ButtonDetails";
import { useState, useEffect } from "react";
import { useStore } from "zustand";
import Card from "../../../assets/common/Card";
import { useLocation } from "react-router";


const Similar = () => {
        const [similarData, setSimilarData] = useState([]);
        const { token } = useStore(themeStore);
        const { id, type } = useLocation().state;
        const [selectedItem, setSelectedItem] = useState(null);


  const getSimilar = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${type}/${id}/similar`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setSimilarData(data.similar || []);
      } else {
        setSimilarData([]);
      }
    } catch (error) {
      console.error("Error fetching similar data:", error);
      setSimilarData([]);
    }
  };

  useEffect(() => {
    if (id && type) {
      getSimilar();
    }
  }, [id, type, selectedItem]);

  const handleCardClick = (item) => {
        setSelectedItem(item);
    };

  return (
    <div className="p-10">
      <h2 className="text-white text-3xl mb-5">
        Similar {type === "movie" ? "Movies" : "Shows"}
      </h2>
      <div className="relative">
      <Button direction="left" />
        {similarData.length > 0 ? (
          <div className="flex space-x-6 overflow-x-scroll no-scrollbar gap-4" id="movie-card-container">
            
            {similarData.map((item) => (
              <div key={item.id} className="w-64" onClick={() => handleCardClick(item)}>
                <Card item={item} type={type} />
              </div>
            ))}
            
          </div>
        ) : (
          <p className="text-white">No similar content available.</p>
        )}
        <Button direction="right" />
      </div>
    </div>
  );
};

export default Similar;
