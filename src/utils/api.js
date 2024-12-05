const api = (() => {
  const BASE_URL_QUESTION = 'https://quizapi.io/api/v1/questions';
  const BASE_URL_CATEGORY = 'https://quizapi.io/api/v1/categories';
  const BASE_URL_TAGS = 'https://quizapi.io/api/v1/tags';

  const API_KEY = 'Kr5UVwFPDKhzw5tLSi1amdppzqTTO1p425ucrM1E';

  const getAllCategory = async () => {
    try {
      const response = await fetch(BASE_URL_CATEGORY, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return null;
    }
  };

  const getAllTags = async () => {
    try {
      const response = await fetch(BASE_URL_TAGS, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error fetching tags:', error);
      return null;
    }
  };

  const getQuestion = async (endpoint = '') => {
    try {
      const response = await fetch(`${BASE_URL_QUESTION}?${endpoint}`, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error fetching questions:', error);
      return null;
    }
  };

  return { getQuestion, getAllCategory, getAllTags };
})();
export default api;
