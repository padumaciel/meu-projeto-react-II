const baseURL = "https://www.breakingbadapi.com/api";

export const getCharacters = async (searchName) => {
    try {
    const response = await fetch(`${baseURL}/characters?name=${searchName}`);
    return response.json();
    } catch (error) {
    console.error(error);
    }
};