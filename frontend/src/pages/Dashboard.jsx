import { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api
      .get("/tasks", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {tasks.map((task) => (
        <div key={task._id}>
          {task.title} - {task.status}
        </div>
      ))}
    </div>
  );
}
