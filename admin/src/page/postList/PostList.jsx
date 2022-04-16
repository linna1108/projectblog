import "./postList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { getPosts } from "../../context/postContext/apiCalls";

export default function PostList() {
  const { posts, dispatch } = useContext(PostContext);
  const PF = "http://localhost:5000/images/"
  useEffect(() => {
    getPosts(dispatch); 
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "photo",
      headerName: "Photo",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="postListItem">
            <img className="postListImg" src={PF + params.row.photo} alt="" />
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/post/" + params.row._id, post: params.row }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              // onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="postList">
      <DataGrid
        rows={posts}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
