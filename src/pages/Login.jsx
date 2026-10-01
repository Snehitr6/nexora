import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import ThemeToggle from "../components/ThemeToggle";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgot, setForgot] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    setError("");
    setForgot(false);

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 650));

      await login(email, password, remember);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const demo = () => {
    setEmail("alex@nexora.app");
    setPassword("123456");
    setError("");
    setForgot(false);
  };

  return (
    <div className="login-page">
      <div className="login-decoration">
        <div className="login-grid" />
        <div className="login-glow" />
      </div>

      {/* TOP BAR */}
      <div className="login-top">
        <Link to="/" className="login-brand">
          <span className="login-brand-icon">
            <Zap size={18} strokeWidth={2.8} />
          </span>

          <span className="login-brand-name">
            Nexora
          </span>
        </Link>

        <div className="login-theme">
          <ThemeToggle />
        </div>
      </div>

      <div className="login-layout">
        {/* LEFT SIDE */}
        <section className="login-intro">
          <span className="pill">
            <Sparkles size={14} />
            Welcome back
          </span>

          <h1>
            Work smarter.
            <br />
            <span>Ship faster.</span>
          </h1>

          <p>
            Pick up where you left off and keep your team
            moving with one focused workspace.
          </p>

          <div className="login-benefits">
            <div>
              <b>01</b>

              <span>
                <strong>One workspace</strong>
                Projects, tasks and team context together.
              </span>
            </div>

            <div>
              <b>02</b>

              <span>
                <strong>AI-assisted planning</strong>
                Turn goals into practical next steps.
              </span>
            </div>

            <div>
              <b>03</b>

              <span>
                <strong>Built for focus</strong>
                Less noise, more meaningful progress.
              </span>
            </div>
          </div>
        </section>

        {/* LOGIN CARD */}
        <section className="login-card">
          <Link to="/" className="back-link">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <div className="login-card-head">
            <h2>Sign in to Nexora</h2>

            <p>
              Use your workspace account to continue.
            </p>
          </div>

          <form onSubmit={submit}>
            <label>
              Email address

              <div className="input-wrap">
                <Mail size={17} />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  type="email"
                  autoComplete="email"
                />
              </div>
            </label>

            <label>
              Password

              <div className="input-wrap">
                <LockKeyhole size={17} />

                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShow((value) => !value)}
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </label>

            <div className="form-row">
              <label className="check-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />

                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot"
                onClick={() => {
                  setForgot(true);
                  setError("");
                }}
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="form-error">
                {error}
              </div>
            )}

            {forgot && (
              <div className="form-success">
                Password reset instructions would be sent
                to your email in a connected backend.
              </div>
            )}

            <button
              className="primary-btn login-submit"
              disabled={loading}
              type="submit"
            >
              {loading ? "Signing in…" : "Sign in"}

              {!loading && <ArrowRight size={17} />}
            </button>
          </form>

          <button
            type="button"
            className="demo-btn"
            onClick={demo}
          >
            Use demo account

            <span>
              alex@nexora.app / 123456
            </span>
          </button>

          <p className="login-terms">
            By continuing, you agree to Nexora’s Terms and
            Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
}