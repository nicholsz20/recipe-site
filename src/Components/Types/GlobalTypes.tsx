export interface SimRecipes {
    id: string,
    title: string,
    imageType: string,
  }

  export interface MatchParams {
    [key: string]: string;
  }

  export interface RecipeDetails {
    id: string;
  title: string;
  analyzedInstructions: {
    steps: Array<{
      step: string;
    }>;
  }[];
  dishTypes: string[];
  diaryFree: boolean;
  diets: string[];
  summary: string;
  instructions:string;
  image: string;
  cuisines: string[];
  }
  


  export interface SimRecipesProps {
    simData: SimRecipes;
  }

  export interface MealType {
    cat: string;
    img: string;
  }
  
  export interface MealTypes {
    meal: MealType;
  }

  export type Nav = {
    handleShowNav: () => void
}


export interface ShowNav {
    showNav: boolean
}
export type ShowNavNHandle = {
    showNav: boolean,
    handleShowNav: () => void
}

export interface PaginationProps {
    totalRecipes: number;
    recipesPerPage: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


export interface RecipeInstructionsProps {
    instructions: string;
}

export interface SpoonacularResponse {
    recipes: RecipeDetails[];
}


export interface RecipeArrayProps {
    data: RecipeDetails;
}

  
  
export interface Recipe {
    id: string;
    title: string;
    image: string;
}

  export interface ApiResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface CatRecipesArray {
        catData: Recipe;
}

export interface SearchBarProps {
    className?: string;
}

export interface SearchResponse {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}
      
export interface SearchRecipesProps {
    searchData: Recipe;
    searchQuery: string;
}