import RecipeInstructions from "./RecipeInstructions";
import { RecipeArrayProps } from "./Types/GlobalTypes";

export const RecipeArray = ({ data }: RecipeArrayProps) => {
  return (
    <div key={data.id} className="container">
      <h3 className="title">{data.title}</h3>
      <div className="content">
        <img src={data.image} className="image" />
        <div className="instructions">
          <h2>Instructions</h2>
          <p>
            {data.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </p>
        </div>
      </div>
      <h4 className="title">Summary</h4>
      <div className="summary">
        <RecipeInstructions instructions={data.summary} />
      </div>
    </div>
  );
};
