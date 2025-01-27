import React, { useState } from 'react';
import { searchArtists, getSongsByArtist } from '../lib/api.ts';

const SearchInput: React.FC = () => {
    const [artistName, setArtistName] = useState('');
    const [artists, setArtists] = useState([]);
    const [songs, setSongs] = useState([]);

    const handleSearch = async () => {
        try {
            const result = await searchArtists(artistName);
            setArtists(result);
        } catch (error) {
            console.error('Error searching for artists:', error);
        }
    };

    const handleArtistSelect = async (artistId: string) => {
        try {
            const result = await getSongsByArtist(artistId);
            setSongs(result);
        } catch (error) {
            console.error('Error retrieving songs by artist:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder="Enter artist name"
            />
            <button onClick={handleSearch}>Search</button>
            {artists.length > 0 && (
                <ul>
                    {artists.map((artist: any) => (
                        <li key={artist.id} onClick={() => handleArtistSelect(artist.id)}>
                            {artist.name}
                        </li>
                    ))}
                </ul>
            )}
            {songs.length > 0 && (
                <div>
                    <h3>Songs</h3>
                    <ul>
                        {songs.map((song: any) => (
                            <li key={song.id}>{song.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchInput;
