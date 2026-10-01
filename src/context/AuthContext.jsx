import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const demoUser = {
  id: 1,
  name: "Alex Morgan",
  email: "alex@nexora.app",
  role: "Product Designer",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("nexora-user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const login = async (email, password, remember = true) => {
    if (email !== demoUser.email || password !== "123456") {
      throw new Error("Invalid email or password");
    }

    setUser(demoUser);

    if (remember) {
      localStorage.setItem("nexora-user", JSON.stringify(demoUser));
    }

    return demoUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("nexora-user");
  };

  const updateUser = (updates) => {
    const updatedUser = {
      ...user,
      ...updates,
    };

    setUser(updatedUser);
    localStorage.setItem("nexora-user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}