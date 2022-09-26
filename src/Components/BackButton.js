import "./BackButton.css";

// PACKAGES
import { useNavigate } from "react-router-dom";

// ----------> FUNCTION FOR BACK BUTTON COMPONENT

const BackButton = () => {
  const navigate = useNavigate();
  //   window.history.state is 0 when the previous page is not your's
  if (window.history.state === null) {
    return <div className="back-link" onClick={() => navigate("/beers")}></div>;
  } else {
    return <div className="back-link" onClick={() => navigate(-1)}></div>;
  }
};

export default BackButton;
