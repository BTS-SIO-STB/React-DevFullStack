import React, { useState, useEffect } from 'react';
import './App.css';
import SearchInput from './components/SearchInput.tsx';
import Title from "./components/Title.tsx";
import List from "./components/List.tsx";
import ElementList from "./components/ElementList.tsx";
import Icon from "./components/Icon.tsx";
import { searchArtists, getSongsByArtist, saveSelectedSongs } from './lib/api.ts';
import { FaPlay } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { LuLassoSelect } from "react-icons/lu";

function App() {
    const [artistName, setArtistName] = useState('');
    const [artists, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // Fetch initial playlists if needed
    }, []);

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

    const handleAddToPlaylist = async (song) => {
        try {
            const updatedPlaylists = playlists.map(playlist => {
                if (playlist.id === 1) { // Assuming you want to add to the first playlist
                    return {
                        ...playlist,
                        songs: [...playlist.songs, song]
                    };
                }
                return playlist;
            });
            setPlaylists(updatedPlaylists);
            await saveSelectedSongs(updatedPlaylists);
        } catch (error) {
            console.error('Error saving selected songs:', error);
        }
    };

    return (
        <div className="App p-4">
            <Title text={'Search for artists'} className="text-2xl font-bold mb-4" />
            <SearchInput
                artistName={artistName}
                setArtistName={setArtistName}
                handleSearch={handleSearch}
                artists={artists}
                handleArtistSelect={handleArtistSelect}
                songs={songs}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <List subject={'Artists'} className="bg-white p-4 rounded shadow">
                    {artists.map(artist => (
                        <ElementList key={artist.id} subject={artist.name} className="mb-2">
                            <Icon text={'Select'} onClick={() => handleArtistSelect(artist.id)}>
                                <LuLassoSelect />
                            </Icon>
                        </ElementList>
                    ))}
                </List>
                <List subject={'Songs'} className="bg-white p-4 rounded shadow">
                    {songs.map(song => (
                        <ElementList key={song.id} subject={song.title} className="mb-2">
                            <Icon text={'Play'} className="mr-2">
                                <FaPlay />
                            </Icon>
                            <Icon text={'Favorite'} onClick={() => handleAddToPlaylist(song)}>
                                <MdOutlineFavorite />
                            </Icon>
                        </ElementList>
                    ))}
                </List>
                <List subject={'Playlists'} className="bg-white p-4 rounded shadow">
                    {playlists.map(playlist => (
                        <ElementList key={playlist.id} subject={playlist.name} className="mb-2" />
                    ))}
                </List>
            </div>
        </div>
    );
}

export default App;