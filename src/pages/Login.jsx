import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Login to PopX</h2>

      <input placeholder="Email address" />
      <input type="password" placeholder="Password" />

      <Button
        className="primary"
        onClick={() => navigate("/profile")}
      >
        Login
      </Button>
    </div>
  );
}
