import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1 className="title">Welcome to PopX</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="actions">
        <Button className="primary" onClick={() => navigate("/signup")}>
          Create Account
        </Button>

        <Button className="secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
