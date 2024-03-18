import db from "../../Database";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Grades() {
  const [courses, setCourses] = useState(db.courses);
  const [modules, setModules] = useState(db.modules);
  const [assignments, setAssignments] = useState(db.assignments);
  const [users, setUsers] = useState(db.users);
  const [enrollments, setEnrollments] = useState(db.enrollments);
  const [grades, setGrades] = useState(db.grades);
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
