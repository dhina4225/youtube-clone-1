import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': '86ca9a2858msh32f745b6d793b26p176d4ejsn3479a6340126',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
