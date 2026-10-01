import { Bell, Menu, Search, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const names = {
  "/dashboard": "Dashboard",
  "/projects": "Projects",
  "/tasks": "Tasks",
  "/profile": "Profile",
  "/settings": "Settings",
};

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [notifications, setNotifications] = useState(false);

  const notificationRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotifications(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const value = query.trim().toLowerCase();

    if (!value) return;

    if (value.includes("project")) {
      navigate("/projects");
    } else if (
      value.includes("task") ||
      value.includes("work")
    ) {
      navigate("/tasks");
    } else if (
      value.includes("profile") ||
      value.includes("account")
    ) {
      navigate("/profile");
    } else if (
      value.includes("setting") ||
      value.includes("preference")
    ) {
      navigate("/settings");
    } else {
      navigate("/dashboard");
    }

    setQuery("");
  };

  return (
    <header className="app-navbar">
      <div className="nav-left">
        <button
          className="mobile-menu-btn icon-btn"
          onClick={onMenuClick}
          type="button"
          aria-label="Open menu"
        >
          <Menu size={21} />
        </button>

        <div>
          <span className="eyebrow">Workspace</span>
          <h1>
            {names[location.pathname] || "Dashboard"}
          </h1>
        </div>
      </div>

      <div className="nav-actions">
        <form
          className="search-box"
          onSubmit={handleSearch}
        >
          <Search size={17} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
          />

          <button
            type="submit"
            className="search-submit"
            aria-label="Search"
          >
            <Search size={14} />
          </button>
        </form>

        <div
          className="notification-wrapper"
          ref={notificationRef}
        >
          <button
            className="icon-btn notification-button"
            type="button"
            onClick={() =>
              setNotifications((value) => !value)
            }
            aria-label="Notifications"
          >
            <Bell size={19} />
            <span className="notification-dot" />
          </button>

          {notifications && (
            <div className="notification-menu">
              <div className="notification-menu-head">
                <strong>Notifications</strong>

                <button
                  type="button"
                  onClick={() => setNotifications(false)}
                >
                  Close
                </button>
              </div>

              <div className="notification-item">
                <span className="notification-bullet" />
                <div>
                  <strong>Project update</strong>
                  <p>
                    Nexora Mobile App is 78% complete.
                  </p>
                </div>
              </div>

              <div className="notification-item">
                <span className="notification-bullet" />
                <div>
                  <strong>Task completed</strong>
                  <p>
                    Update button components was completed.
                  </p>
                </div>
              </div>

              <button
                className="notification-view"
                type="button"
                onClick={() => {
                  setNotifications(false);
                  navigate("/tasks");
                }}
              >
                View tasks
              </button>
            </div>
          )}
        </div>

        <ThemeToggle />

        <button
          className="nav-user"
          type="button"
          onClick={() => navigate("/profile")}
        >
          <img
            src={user?.avatar}
            alt={user?.name || "Profile"}
          />

          <div>
            <strong>
              {user?.name || "Alex Morgan"}
            </strong>

            <span>
              {user?.role || "Product Designer"}
            </span>
          </div>

          <UserRound size={14} />
        </button>
      </div>
    </header>
  );
}