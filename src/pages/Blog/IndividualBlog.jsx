import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { LoadingPage } from "../../components/LoadingPage/LoadingPage";
import { ErrorPage } from "../../components/ErrorPage/ErrorPage";
import INDBLG from "./individualBlog.module.css";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export const IndividualBlog = () => {
  //change this according to where the strapi admin is hosted
  const location = useLocation();
  let { loadedFrom } = location.state;
  const host = "http://localhost:1338";
  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `${host}/api/blogs/${id}?populate=blogImage,authorInfo.profilePic`
  );
  const goBackMethod = () => {
    if (loadedFrom === "home") {
      return "/";
    } else if (loadedFrom === "blog") {
      return "/blog";
    }

    return "/";
  };
  //loading and error displays
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  //test remove if seen
  console.log(data);

  return (
    <div className={INDBLG["individualBlogPage"]}>
      <div className={INDBLG["indBlg-backButton-container"]}>
        <Link
          to={{ pathname: goBackMethod() }}
          className={INDBLG["indBlg-backButton"]}
        >
          <i class="fa-sharp fa-solid fa-arrow-left"></i> Go Back
        </Link>
      </div>

      <div className={INDBLG["indBlg-headerContainer"]}>
        <h1 className={INDBLG["indBlg-blogTitle"]}>
          {data.data.attributes.blogTitle}
        </h1>
        <div className={INDBLG["indBlg-auth_date-container"]}>
          <img
            src={`${host}${data.data.attributes.authorInfo.profilePic.data.attributes.url}`}
            className={INDBLG["indBlg-author-img"]}
            alt="author"
          ></img>
          <h6 className={INDBLG["indBlg-authorName"]}>
            {data.data.attributes.authorInfo.nameOfAuthor}
          </h6>
          <h6 className={INDBLG["indBlg-uploadDate"]}>
            {data.data.attributes.authorInfo.dateOfUpload}
          </h6>
        </div>
      </div>
      <div className={INDBLG["indBlg-content"]}>
        <img
          src={`${host}${data.data.attributes.blogImage.data.attributes.url}`}
          className={INDBLG["indBlg-blogImage"]}
          alt="blog"
        ></img>
        <div className={INDBLG["indBlg-blogBody"]}>
          <ReactMarkdown>{data.data.attributes.blogBody}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
