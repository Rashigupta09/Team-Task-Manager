import { useState } from "react";
import api from "../api";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Member",
  });

  const signup = async () => {
    try {
      await api.post("/auth/signup", form);
      alert("Signup success");
      window.location.href = "/";
    } catch {
      alert("Error");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option>Member</option>
        <option>Admin</option>
      </select>

      <button onClick={signup}>Signup</button>
    </div>
  );
}
