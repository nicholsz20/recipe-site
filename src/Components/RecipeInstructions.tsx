import React from 'react';

interface RecipeInstructionsProps {
    instructions: string;
}


const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: instructions }} />
    );
}

export default RecipeInstructions;
