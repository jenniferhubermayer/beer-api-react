import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  if (window.history.state === null) {
    return <div className="back-link" onClick={() => navigate("/beers")}></div>;
  } else {
    return <div className="back-link" onClick={() => navigate(-1)}></div>;
  }
};

export default BackButton;
