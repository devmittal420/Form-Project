import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Picker from "emoji-picker-react";
/**
 * Phase 1 - Implement a form to accept todo from user
 */

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const []

  const onAddTodo = () => {
    if (!todoTitle) {
      toast.error("Please enter a todo title", {
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setTodoList((prevState) => [...prevState, todoTitle]);
    setTodoTitle("");
  };

  console.log("Re-Render: ", todoTitle, todoList);
  return (
    <div>
      <div>
        <p>New Todo Title</p>
        <input
          type="text"
          value={todoTitle}
          placeholder="Enter your new todo title here."
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <h1>My Todos</h1>
        <hr />
        {todoList?.length > 0 ? (
          <ul>
            {todoList.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <p>{item}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No todo available</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Todos;
