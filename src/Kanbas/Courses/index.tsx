import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import exp from "constants";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);

  // Function to generate dynamic breadcrumb based on the current pathconst generateBreadcrumb = () => [
  const generateBreadcrumb = () => {
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: url }} key={url}>
          {snippet}
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/course" }} key="home">
        Course
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
  };
  return (
    <div>
      <h1>
        {/* <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/course" }}>
            Course
          </Breadcrumb.Item>
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: `/course/${course?._id}` }}
          >
            {course?.name}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb> */}
        {/* <HiMiniBars3 /> Course {course?.name} / <Link to="Home">Home</Link> */}
        {/* <HiMiniBars3 />  */}
        {generateBreadcrumb()}
      </h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />

            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
