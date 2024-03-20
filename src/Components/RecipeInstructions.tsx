import { RecipeInstructionsProps } from "./Types/GlobalTypes";

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: instructions }} />
    );
}

export default RecipeInstructions;
