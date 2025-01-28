export const searchArtists = async (artistName: string) => {
    try {
        const response = await fetch(`http://localhost:5128/api/Deezer/search?name=${artistName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error searching for artists:', error);
        throw error;
    }
};

export const getSongsByArtist = async (artistId: string) => {
    try {
        const response = await fetch(`http://localhost:5128/api/Deezer/songs/${artistId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error retrieving songs by artist:', error);
        throw error;
    }
};

export const saveSelectedSongs = async (songId: any) => {
    try {
        const response = await fetch(`http://localhost:5128/api/Deezer/save-songs/${songId}`, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error saving selected songs:', error);
        throw error;
    }
};

export const getPlaylists = async () => {
    try {
        const response = await fetch('http://localhost:5128/api/Deezer/playlist/songs');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error retrieving playlists:', error);
        throw error;
    }
}