import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Modal from './Modal';

const Trending = ({ setItem }) => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState("Movie");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const options = ["Movie", "TV"];

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.toLowerCase()}/trending`);
            const data = await response.json();

            console.log(data.console);

            setData(data.content);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [selectedOption]);

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <div className='text-white bg-black'>
            <div className='py-14 mb-[3.1rem]'>
                <h3 className='text-3xl font-semibold mb-4'>Trending Now</h3>
                <select
                    value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                    }}
                    className='w-[280px] h-[40px] mr-5 bg-black rounded-[5px] border border-gray-600'
                >
                    {options.map((op) => (
                        <option key={op} value={op}>{op}</option>
                    ))}
                </select>
                <div className='w-full flex gap-12 overflow-scroll overflow-y-hidden py-5 pl-7'>
                    {data.map((item, index) =>
                        <div key={index} onClick={() => handleCardClick(item)}>
                            <MovieCard className='' setItem={setItem} item={item} index={index} />
                        </div>
                    )}
                </div>
            </div>
            <Modal isOpen={isModalOpen} item={selectedItem} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Trending;
