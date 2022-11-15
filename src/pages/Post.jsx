import Card from "../components/shared/Card";
// import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  //   const params = useParams();
  const status = 202;
  const navigate = useNavigate();
  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <Card>
      <div>
        {/* <h1>Post {params.id}</h1>
        <p>Name{params.name}</p> */}
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
          <Route path="/show" element={<h1>hellow world</h1>} />
          {/**this will work olny when add * in path on main nav */}
        </Routes>
      </div>
    </Card>
  );
}

export default Post;
