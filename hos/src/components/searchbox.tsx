import React, { useState } from 'react';
import Image from 'next/image';
import maletinha from '../../public/maletinha.svg'

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="pb-5 w-15.5rem h-8.5rem my-0.7rem mx-auto bg-white drop-shadow-xl rounded-lg">
      <Image
        src={maletinha}
        alt=""
        className="flex w-1rem h-2rem ml-1.35rem pt-1rem"
      />
      <h2 className="text-0.87rem text-grafite font-semibold py-0.8rem ml-1.35rem">
        Inforsas
      </h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquisar por nome ou cidade"
        className="text-0.6rem text-cinza ml-1.35rem px-2 py-1 border rounded"
      />
      <button
        onClick={handleSearch}
        className="text-0.6rem text-white bg-blue-500 hover:bg-blue-600 ml-1.35rem px-2 py-1 rounded mt-2"
      >
        Pesquisar
      </button>
    </div>
  );
};

export default SearchBox;
