import React, { useState, useEffect } from 'react';
import './App.css';
import SearchInput from './components/SearchInput.tsx';
import Title from "./components/Title.tsx";
import List from "./components/List.tsx";
import ElementList from "./components/ElementList.tsx";
import Icon from "./components/Icon.tsx";
import { searchArtists, getSongsByArtist, saveSelectedSongs, getPlaylists } from './lib/api.ts';
import { FaPlay } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { LuLassoSelect } from "react-icons/lu";

function App() {
    const [artistName, setArtistName] = useState('');
    const [artists, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [currentSongUrl, setCurrentSongUrl] = useState(''); // To store current song's Deezer URL

    useEffect(() => {
        // Fetch initial playlists if needed
        handlePlaylistSelect();
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
            await saveSelectedSongs(song.id);
            await handlePlaylistSelect();
        } catch (error) {
            console.error('Error saving selected songs:', error);
        }
    };

    const handlePlaylistSelect = async () => {
        try {
            const result = await getPlaylists();
            setPlaylists(result);
            console.log('Playlists:', result);
        } catch (error) {
            console.error('Error retrieving playlists:', error);
        }
    };

    const handleSongSelect = (songUrl) => {
        setCurrentSongUrl(songUrl); // Update current song URL to display the widget
    }

    return (
        <div className="App p-4">
            <SearchInput
                artistName={artistName}
                setArtistName={setArtistName}
                handleSearch={handleSearch}
                artists={artists}
                handleArtistSelect={handleArtistSelect}
                songs={songs}
            />
            {/* Deezer Widget to Play the Selected Song */}
            {currentSongUrl && (
                <div className="mt-4">
                    <iframe
                        title="deezer-widget"
                        src={`https://widget.deezer.com/widget/auto/track/${currentSongUrl.split('/').pop()}`}
                        width="100%"
                        height="300"
                        frameBorder="0"
                        allowTransparency="true"
                        allow="encrypted-media; clipboard-write"
                    />
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <List subject={'Artists'} className="bg-white p-4 rounded shadow list-container">
                    {artists.map(artist => (
                        <ElementList key={artist.id} subject={artist.name} className="mb-2 ">
                            <Icon text={'Select'} onClick={() => handleArtistSelect(artist.id)}>
                                <LuLassoSelect/>
                            </Icon>
                        </ElementList>
                    ))}
                </List>
                <List subject={'Songs'} className="bg-white p-4 rounded shadow list-container">
                    {songs.map(song => (
                        <ElementList key={song.id} subject={song.title} className="mb-2">
                            <Icon text={'Play'} className="mr-2" onClick={() => handleSongSelect(song.songUrl)}>
                                <FaPlay/>
                            </Icon>
                            <Icon text={'Favorite'} onClick={() => handleAddToPlaylist(song)}>
                                <MdOutlineFavorite/>
                            </Icon>
                        </ElementList>
                    ))}
                </List>
                <List subject={'Playlists'} className="bg-white p-4 rounded shadow list-container">
                    {playlists.map(playlist => (
                        <ElementList key={playlist.id} subject={playlist.title} className="mb-2">
                            <Icon text={'Play'} className="mr-2" onClick={() => handleSongSelect(playlist.songUrl)}>
                                <FaPlay/>
                            </Icon>
                        </ElementList>
                    ))}
                </List>
            </div>
        </div>
    );
}

export default App;
