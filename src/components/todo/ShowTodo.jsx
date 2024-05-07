import PropTypes from "prop-types";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDoneOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const ShowTodo = ({ data, deleteTodo, editTodo, editCheckBox }) => {
  const { id, text, checkVal } = data;

  const [ready, setReady] = useState(false);
  const [textVal, setTextVal] = useState(text);

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "space-between",
        width: "900px",
        marginTop: "10px",
        padding: "10px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          //   justifyContent: "center",
          //   border: "2px solid red",
          padding: "0",
          width: "500px",
        }}
      >
        <input
          type="checkbox"
          style={{
            position: "absolute",
            width: "25px",
            left: "-35px",
            top: "13px",
            alignContent: "center",
          }}
          checked={checkVal}
          onChange={() => editCheckBox(id)}
        />
        <h1>
          {ready ? (
            <input
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
            />
          ) : checkVal ? (
            <del style={{ color: "red" }}>{text}</del>
          ) : (
            text
          )}
        </h1>
      </div>

      <div
        style={{
          //   border: "2px solid red",
          width: "310px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          className="button-89"
          style={{ color: "red" }}
          onClick={() => deleteTodo(id)}
        >
          <MdDelete />
          Delete
        </button>
        <span
          onClick={() => {
            setReady(!ready);
            if (textVal !== text) {
              editTodo(id, textVal);
            }
          }}
        >
          {" "}
          {ready ? (
            <button className="button-89" style={{ color: "green" }}>
              <MdOutlineDoneOutline /> Save
            </button>
          ) : (
            <button className="button-89">
              <CiEdit /> Edit
            </button>
          )}
        </span>
      </div>
    </div>
  );
};

ShowTodo.propTypes = {
  data: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  editCheckBox: PropTypes.func.isRequired,
};

export default ShowTodo;
