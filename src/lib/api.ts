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

export const saveSelectedSongs = async (songs: any) => {
    try {
        const response = await fetch('/api/Deezer/save-songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(songs),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error saving selected songs:', error);
        throw error;
    }
};