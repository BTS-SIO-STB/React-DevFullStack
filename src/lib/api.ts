import axios from 'axios';

export const searchArtists = async (artistName: string) => {
    try {
        const response = await axios.get(`/api/artists?name=${artistName}`);
        return response.data;
    } catch (error) {
        console.error('Error searching for artists:', error);
        throw error;
    }
};

export const getSongsByArtist = async (artistId: string) => {
    try {
        const response = await axios.get(`/api/artists/${artistId}/songs`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving songs by artist:', error);
        throw error;
    }
};

export const saveSelectedSongs = async (songs: any) => {
    try {
        const response = await axios.post('/api/songs', songs);
        return response.data;
    } catch (error) {
        console.error('Error saving selected songs:', error);
        throw error;
    }
};
