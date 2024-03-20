import axios from "axios";

//const KEY = "24ba6bf883a944a09e1f169a549f2c10";
const KEY = "cb61fb7dddc34daba2d7f61b391e90c1";
//const KEY = "e3de5d36255e46babdbd21cbbbf5ec38";
//const KEY = "fa0f376a27884351b9f852d1ae5e20f8";
//const KEY = "50980bc1ff884ed68509e87da2cf5db1";

export default KEY;

export const fetchSearchData = async (searchQuery: string) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${KEY}&number=99`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching search data:", error);
    throw error;
  }
};

export const fetchInfoAndSimilarData = async (numberId: string | undefined) => {
  try {
    const [IdResponse, simResponse] = await Promise.all([
      axios.get(
        `https://api.spoonacular.com/recipes/${numberId}/information?apiKey=${KEY}`
      ),
      axios.get(
        `https://api.spoonacular.com/recipes/${numberId}/similar?apiKey=${KEY}`
      ),
    ]);
    return { idData: IdResponse.data, simData: simResponse.data };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMealTypeData = async (mealType: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&type=${mealType}&number=99`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMysteryData = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${KEY}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
