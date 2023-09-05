import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";

const Home = () => {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        title: title,
        description: desc,
      },
    ]);

    setTitle("");
    setDesc("");
  };

  const deletetask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });

    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Daily Goals </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter your Task"
            required = {true}
          />

          <textarea
            placeholder=" Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>

          <button type="submit">Add Task</button>
        </form>

        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteBtn={deletetask}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
