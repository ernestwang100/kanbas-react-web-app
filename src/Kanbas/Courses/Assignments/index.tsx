import React from "react";
import AssignmentList from "./List";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./index.css";
import "../../styles.css";

function Assignments() {
  // const { courseId } = useParams();
  // const assignments = db.assignments;
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId);
  return (
    <div className="wd-flex-grow-1">
      <input placeholder="Search for Assignment" />
      <div className="wd-flex-row-container-1 wd-flex-grow-1">
        <button className="gray-button">
          <AiOutlinePlus />
          Group
        </button>
        <button className="red-button">
          <AiOutlinePlus />
          Assignment
        </button>
        <button className="gray-button">
          <BiDotsVerticalRounded />
        </button>
      </div>
      <hr />

      <AssignmentList />
    </div>
  );
}
export default Assignments;
