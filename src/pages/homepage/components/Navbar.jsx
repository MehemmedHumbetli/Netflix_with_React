import React from 'react';

const Navbar = ({ tabItems, selectedTab, setSelectedTab }) => {
  return (
    <div className='text-[22px] absolute flex gap-[67px] top-0 left-0 w-full items-center py-[30px] px-[90px]'>
      <img
        className='w-[9.9rem] h-[3rem]'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='logoNetflix'
      />
      <div className='flex items-center gap-[28px] '></div>
      {tabItems.map((item) => (
        <button
          key={item.value}
          className={`${
            selectedTab.value === item.value ? 'text-white font-bold' : 'text-zinc-300'
          }`}
          onClick={() => {
            setSelectedTab(item);
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
