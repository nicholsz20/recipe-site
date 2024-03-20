import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="refresh-btn top-left" onClick={handleBackClick}>
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </button>
    </div>
  );
};

export default BackButton;
