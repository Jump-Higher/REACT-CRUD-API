// import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import instance from "../../api/api_instace";
import { Button, Gap } from "../../components";
// const api = `http://13.239.136.211/blog-api/v1/article/update`;

const UpdateArticle = () => {
  const [update, setUpdate] = useState({
    title: "",
    description: "",
    image: null,
  });

  const { id_article } = useParams();
  const navigate = useNavigate();

  // get article
  useEffect(() => {
    document.title = "Update article";
    const getArticleById = async (id_article) => {
      try {
        const res = await instance.get(`article/${id_article}`);
        console.log(res);
        setUpdate(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getArticleById(id_article);
  }, [id_article]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("diklik");

    // update article
    try {
      const res = await instance.put(`article/update/${id_article}`, update);
      // tampilkan notifikasi data berhasil diupdate menggunakan sweet alert
      console.log(res.data);
      swal({
        title: "Success!",
        text: "Data Artikel Berhasil Diupdate!",
        icon: "success",
        button: "close!",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <Gap height={170} />
        <h1 className="text-center mb-2 title"> Update Article</h1>
        <br />
        <div className="row justify-content-center bg-head">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center text-bg">
                Form Update Article
              </div>
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
                  <div className="form-group">
                    <input
                      type="file"
                      id="image"
                      value={update.image}
                      onChange={(e) => {
                        setUpdate({
                          ...update,
                          image: e.target.files[0],
                        });
                      }}
                    />
                  </div>
                  <Gap height={10} />
                  <div className="btn-group">
                    <Link to="/">
                      <Button
                        icon="arrow-left"
                        label="Back "
                        variant="outline-secondary"
                      />
                    </Link>
                    <Gap width={20} />
                    <Button
                      label="Update Article"
                      variant="outline-primary"
                      className="color"
                    />
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
