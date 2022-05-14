export type TParticipant = {
    artist: string;
    country: string;
    flag: string;
    id: number;
    song: string;
}

export const participants: Array<TParticipant> = [
    {
        artist: 'We Are Domi',
        country: 'Tschechische Republik',
        flag: '🇨🇿',
        id: 1,
        song: 'Lights off',
    },
    {
        artist: 'WRS',
        country: 'Rumänien',
        flag: '🇷🇴',
        id: 2,
        song: 'Llámame',
    },
    {
        artist: 'Maro',
        country: 'Portugal',
        flag: '🇵🇹',
        id: 3,
        song: 'Saudade, saudade',
    },
    {
        artist: 'The Rasmus',
        country: 'Finnland',
        flag: '🇫🇮',
        id: 4,
        song: 'Jezebel',
    },
    {
        artist: 'Marius Bear',
        country: 'Schweiz',
        flag: '🇨🇭',
        id: 5,
        song: 'Boys Do Cry',
    },
    {
        artist: 'Alvan & Ahez',
        country: 'Frankreich',
        flag: '🇫🇷',
        id: 6,
        song: 'Fulenn',
    },
    {
        artist: 'Subwoolfer',
        country: 'Norwegen',
        flag: '🇳🇴',
        id: 7,
        song: 'Give That Wolf A Banana',
    },
    {
        artist: 'Rosa Linn',
        country: 'Armenien',
        flag: '🇦🇲',
        id: 8,
        song: 'Snap',
    },
    {
        artist: 'Mahmood & Blanco',
        country: 'Italien',
        flag: '🇮🇹',
        id: 9,
        song: 'Brividi',
    },
    {
        artist: 'Chanel',
        country: 'Spanien',
        flag: '🇪🇸',
        id: 10,
        song: 'Slomo',
    },
    {
        artist: 'S10',
        country: 'Niederlande',
        flag: '🇳🇱',
        id: 11,
        song: 'De diepte',
    },
    {
        artist: 'Kalush Orchestra',
        country: 'Ukraine',
        flag: '🇺🇦',
        id: 12,
        song: 'Stefania',
    },
    {
        artist: 'Malik Harris',
        country: 'Deutschland',
        flag: '🥨',
        id: 13,
        song: 'Rockstars',
    },
    {
        artist: 'Monika Liu',
        country: 'Litauen',
        flag: '🇱🇹',
        id: 14,
        song: 'Sentimentai',
    },
    {
        artist: 'Nadir Rustamli',
        country: 'Aserbaidschan',
        flag: '🇦🇿',
        id: 15,
        song: 'Fade To Black',
    },
    {
        artist: 'Jérémie Makiese',
        country: 'Belgien',
        flag: '🇧🇪',
        id: 16,
        song: 'Miss You',
    },
    {
        artist: 'Amanda Georgiadi Tenfjord',
        country: 'Griechenland',
        flag: '🇬🇷',
        id: 17,
        song: 'Die Together',
    },
    {
        artist: 'Systur',
        country: 'Island',
        flag: '🇮🇸',
        id: 18,
        song: 'Með hækkandi sól',
    },
    {
        artist: 'Zdob și Zdub & Fraţii Advahov',
        country: 'Moldau',
        flag: '🇲🇩',
        id: 19,
        song: 'Trenuleţul',
    },
    {
        artist: 'Cornelia Jakobs',
        country: 'Schweden',
        flag: '🇸🇪',
        id: 20,
        song: 'Hold Me Closer',
    },
    {
        artist: 'Sheldon Riley',
        country: 'Australien',
        flag: '🇦🇺',
        id: 21,
        song: 'Not The Same',
    },
    {
        artist: 'Sam Ryder',
        country: 'Großbritannien (UK)',
        flag: '🇬🇧',
        id: 22,
        song: 'Space Man',
    },
    {
        artist: 'Ochman',
        country: 'Polen',
        flag: '🇵🇱',
        id: 23,
        song: 'River',
    },
    {
        artist: 'Konstrakta',
        country: 'Serbien',
        flag: '🇷🇸',
        id: 24,
        song: 'In corpore sano',
    },
    {
        artist: 'Stefan',
        country: 'Estland',
        flag: '🇪🇪',
        id: 25,
        song: 'Hope',
    },
];

export const getById = (id: number) => participants.find((participant) => participant.id === id);