import axios from "axios";
// import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Gap } from "../../components";

// const api = `http://13.239.136.211/blog-api/v1/article/update`;

const UpdateArticle = () => {
  const [update, setUpdate] = useState({
    title: "",
    description: "",
  });

  const { id_article } = useParams();
  const navigate = useNavigate();

  // get article
  useEffect(() => {
    document.title = "Update article";
    axios
      .get(`http://13.239.136.211/blog-api/v1/article/${id_article}`)
      .then((res) => {
        console.log(res);
        setUpdate(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id_article]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // update article
    axios
      .put(
        `http://13.239.136.211/blog-api/v1/article/update/${id_article}`,
        update
      )
      .then((res) => {
        console.log(res.data);
        // tampilkan notifikasi data berhasil diupdate menggunakan sweet alert
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="container">
        <Gap height={170} />
        <h1 className="text-center"> Update Article</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">Form Update Article</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Title..."
                      value={update.title}
                      onChange={(e) =>
                        setUpdate({ ...update, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Description..."
                      value={update.description}
                      onChange={(e) =>
                        setUpdate({ ...update, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <Gap height={10} />
                  <div className="btn-group">
                    <Button to="/" label="Back" variant="secondary" />
                    <Gap width={20} />
                    <Button label="Update Article" variant="success" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateArticle;
