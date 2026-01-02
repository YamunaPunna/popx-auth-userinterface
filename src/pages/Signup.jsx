import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Create your PopX account</h2>

      <input placeholder="Full Name" />
      <input placeholder="Phone number" />
      <input placeholder="Email address" />
      <input type="password" placeholder="Password" />

      <Button
        className="primary"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </Button>
    </div>
  );
}
