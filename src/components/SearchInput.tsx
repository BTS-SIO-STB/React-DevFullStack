import React from 'react';

interface SearchInputProps {
    artistName: string;
    setArtistName: (name: string) => void;
    handleSearch: () => void;
    artists: any[];
    handleArtistSelect: (artistId: string) => void;
    songs: any[];
}

const SearchInput: React.FC<SearchInputProps> = ({
                                                     artistName,
                                                     setArtistName,
                                                     handleSearch,
                                                     artists,
                                                     handleArtistSelect,
                                                     songs
                                                 }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder="Enter artist name"
                className="border p-2 rounded w-full mb-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Search</button>
        </div>
    );
};

export default SearchInput;