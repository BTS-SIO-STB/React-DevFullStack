export const mockArtists = [
    {
        id: 1,
        name: 'Artist One',
        songs: [
            { id: 1, title: 'Song One', artistId: 1, songUrl: 'http://example.com/song1', artist: { id: 1, name: 'Artist One' } },
            { id: 2, title: 'Song Two', artistId: 1, songUrl: 'http://example.com/song2', artist: { id: 1, name: 'Artist One' } }
        ]
    },
    {
        id: 2,
        name: 'Artist Two',
        songs: [
            { id: 3, title: 'Song Three', artistId: 2, songUrl: 'http://example.com/song3', artist: { id: 2, name: 'Artist Two' } }
        ]
    }
];

export const mockPlaylists = [
    {
        id: 1,
        name: 'Playlist One',
        songs: [
            { id: 1, title: 'Song One', artistId: 1, songUrl: 'http://example.com/song1', artist: { id: 1, name: 'Artist One' } },
            { id: 3, title: 'Song Three', artistId: 2, songUrl: 'http://example.com/song3', artist: { id: 2, name: 'Artist Two' } }
        ],
        savedAt: new Date('2023-01-01')
    },
    {
        id: 2,
        name: 'Playlist Two',
        songs: [
            { id: 2, title: 'Song Two', artistId: 1, songUrl: 'http://example.com/song2', artist: { id: 1, name: 'Artist One' } }
        ],
        savedAt: new Date('2023-02-01')
    }
];

export const mockSongs = [
    { id: 1, title: 'Song One', artistId: 1, songUrl: 'http://example.com/song1', artist: { id: 1, name: 'Artist One' } },
    { id: 2, title: 'Song Two', artistId: 1, songUrl: 'http://example.com/song2', artist: { id: 1, name: 'Artist One' } },
    { id: 3, title: 'Song Three', artistId: 2, songUrl: 'http://example.com/song3', artist: { id: 2, name: 'Artist Two' } }
];