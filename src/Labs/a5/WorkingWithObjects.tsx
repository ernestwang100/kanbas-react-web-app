import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:5000/a5/assignment";

  const [module, setModule] = useState({ id: 1, title: "NodeJS" });

  const MODULE_URL = "http://localhost:5000/a5/module";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>Update Title</a>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <br />

      <a href={`${ASSIGNMENT_URL}/description/${assignment.description}`}>
        Update Description
      </a>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        value={assignment.description}
      />
      <br />

      <a href={`${ASSIGNMENT_URL}/due/${assignment.due}`}>Update Due Date</a>
      <input
        type="date"
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
        value={assignment.due}
      />

      <br />

      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        checked={assignment.completed}
      />
      <br />

      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>Update Score</a>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
        value={assignment.score}
      />

      <a href={`${MODULE_URL}/name/${module.title}`}>Update Module</a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, title: e.target.value })}
        value={module.title}
      />

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:5000/a5/assignment">Get Assignment</a>
      <br />
      <a href={`${MODULE_URL}`}>Get Module</a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:5000/a5/assignment/title">Get Title</a>
      <br />
      <a href={`${MODULE_URL}/name/`}>Get Module</a>
    </div>
  );
}
export default WorkingWithObjects;
