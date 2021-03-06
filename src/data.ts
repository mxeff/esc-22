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
        flag: '๐จ๐ฟ',
        id: 1,
        song: 'Lights off',
    },
    {
        artist: 'WRS',
        country: 'Rumรคnien',
        flag: '๐ท๐ด',
        id: 2,
        song: 'Llรกmame',
    },
    {
        artist: 'Maro',
        country: 'Portugal',
        flag: '๐ต๐น',
        id: 3,
        song: 'Saudade, saudade',
    },
    {
        artist: 'The Rasmus',
        country: 'Finnland',
        flag: '๐ซ๐ฎ',
        id: 4,
        song: 'Jezebel',
    },
    {
        artist: 'Marius Bear',
        country: 'Schweiz',
        flag: '๐จ๐ญ',
        id: 5,
        song: 'Boys Do Cry',
    },
    {
        artist: 'Alvan & Ahez',
        country: 'Frankreich',
        flag: '๐ซ๐ท',
        id: 6,
        song: 'Fulenn',
    },
    {
        artist: 'Subwoolfer',
        country: 'Norwegen',
        flag: '๐ณ๐ด',
        id: 7,
        song: 'Give That Wolf A Banana',
    },
    {
        artist: 'Rosa Linn',
        country: 'Armenien',
        flag: '๐ฆ๐ฒ',
        id: 8,
        song: 'Snap',
    },
    {
        artist: 'Mahmood & Blanco',
        country: 'Italien',
        flag: '๐ฎ๐น',
        id: 9,
        song: 'Brividi',
    },
    {
        artist: 'Chanel',
        country: 'Spanien',
        flag: '๐ช๐ธ',
        id: 10,
        song: 'Slomo',
    },
    {
        artist: 'S10',
        country: 'Niederlande',
        flag: '๐ณ๐ฑ',
        id: 11,
        song: 'De diepte',
    },
    {
        artist: 'Kalush Orchestra',
        country: 'Ukraine',
        flag: '๐บ๐ฆ',
        id: 12,
        song: 'Stefania',
    },
    {
        artist: 'Malik Harris',
        country: 'Deutschland',
        flag: '๐ฅจ',
        id: 13,
        song: 'Rockstars',
    },
    {
        artist: 'Monika Liu',
        country: 'Litauen',
        flag: '๐ฑ๐น',
        id: 14,
        song: 'Sentimentai',
    },
    {
        artist: 'Nadir Rustamli',
        country: 'Aserbaidschan',
        flag: '๐ฆ๐ฟ',
        id: 15,
        song: 'Fade To Black',
    },
    {
        artist: 'Jรฉrรฉmie Makiese',
        country: 'Belgien',
        flag: '๐ง๐ช',
        id: 16,
        song: 'Miss You',
    },
    {
        artist: 'Amanda Georgiadi Tenfjord',
        country: 'Griechenland',
        flag: '๐ฌ๐ท',
        id: 17,
        song: 'Die Together',
    },
    {
        artist: 'Systur',
        country: 'Island',
        flag: '๐ฎ๐ธ',
        id: 18,
        song: 'Meรฐ hรฆkkandi sรณl',
    },
    {
        artist: 'Zdob ศi Zdub & Fraลฃii Advahov',
        country: 'Moldau',
        flag: '๐ฒ๐ฉ',
        id: 19,
        song: 'Trenuleลฃul',
    },
    {
        artist: 'Cornelia Jakobs',
        country: 'Schweden',
        flag: '๐ธ๐ช',
        id: 20,
        song: 'Hold Me Closer',
    },
    {
        artist: 'Sheldon Riley',
        country: 'Australien',
        flag: '๐ฆ๐บ',
        id: 21,
        song: 'Not The Same',
    },
    {
        artist: 'Sam Ryder',
        country: 'Groรbritannien (UK)',
        flag: '๐ฌ๐ง',
        id: 22,
        song: 'Space Man',
    },
    {
        artist: 'Ochman',
        country: 'Polen',
        flag: '๐ต๐ฑ',
        id: 23,
        song: 'River',
    },
    {
        artist: 'Konstrakta',
        country: 'Serbien',
        flag: '๐ท๐ธ',
        id: 24,
        song: 'In corpore sano',
    },
    {
        artist: 'Stefan',
        country: 'Estland',
        flag: '๐ช๐ช',
        id: 25,
        song: 'Hope',
    },
];

export const getById = (id: number) => participants.find((participant) => participant.id === id);