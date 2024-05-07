import { useState, useEffect } from "react";
import { v4 as idGenerator } from "uuid";
import ShowTodo from "./ShowTodo";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodo = () => {
    if (inputVal) {
      setTodoList([
        ...todoList,
        { id: idGenerator(), text: inputVal, checkVal: false },
      ]);
      setInputVal("");
    } else {
      alert("Please Enter TODO");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((ele) => ele.id !== id));
  };

  const handleEditTodo = (id, val) => {
    console.log(id, val);

    let editData = [...todoList];

    let updatedVal = editData.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: val };
      }
      return todo;
    });

    setTodoList(updatedVal);
  };

  const handleCheckBox = (id) => {
    // console.log("inside ck");
    let updatedData = todoList.map((ele) => {
      if (ele.id === id) {
        ele.checkVal = !ele.checkVal;
      }
      return ele;
    });
    setTodoList(updatedData);
    // console.log(updatedData);
  };

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          // border: "2px solid black",
          width: "60%",
          margin: "auto",
          padding: "10px",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
          // flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Add Todo"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="button-89" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <div>
        {todoList.map((ele) => {
          return (
            <ShowTodo
              data={ele}
              key={ele.id}
              deleteTodo={handleDeleteTodo}
              editTodo={handleEditTodo}
              editCheckBox={handleCheckBox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
