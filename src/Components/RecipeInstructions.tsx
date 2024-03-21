//Purpose of this file is to convert the HTML Elements form the api into html elements on the page

import { RecipeInstructionsProps } from "./Types/GlobalTypes";

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
  return <div dangerouslySetInnerHTML={{ __html: instructions }} />;
};

export default RecipeInstructions;
