import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, IconPencil, IconTrash } from "../../components";

const ListArticle = () => {
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "List Article";
    axios
      .get(`http://13.239.136.211/blog-api/v1/articles`)
      .then((res) => {
        console.log(res);
        setArticles(res.data.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">All Articles </h1>
        <Button to="/add-article" label="add article +" variant="primary" />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {articles.map((article, index) => (
              <tr key={index}>
                <th scope="row">{(index = index + 1)}</th>
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td>
                  <Link
                    to={`http://localhost:5173/update-article/${article.id_article}`}
                  >
                    <IconPencil />
                  </Link>
                  <Link to="#">
                    <IconTrash />
                  </Link>
                </td>
              </tr>
            ))}
            {/* <tr>
              <th scope="row">1.</th>
              <td>Article 1</td>
              <td>Description 1</td>
              <td>
                <Link to="#">
                  <IconPencil />
                </Link>
                <Link to="#">
                  <IconTrash />
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">2.</th>
              <td>Article 2</td>
              <td>Description 2</td>
              <td>
                <Link to="#">
                  <IconPencil />
                </Link>
                <Link to="#">
                  <IconTrash />
                </Link>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListArticle;
