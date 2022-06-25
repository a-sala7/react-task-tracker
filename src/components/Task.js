import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Task = ({ task, onDelete, onReminderToggle }) => {

  return (
    <div
      className={task.reminder ? "task reminder" : "task"}
      onDoubleClick={() => onReminderToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
