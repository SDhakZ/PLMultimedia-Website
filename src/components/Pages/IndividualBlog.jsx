import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import INDBLG from "../CSSmodules/individualBlog.module.css";
import ReactMarkdown from "react-markdown";
export const IndividualBlog = () => {
  //change this according to where the strapi admin is hosted
  const host = "http://localhost:1338";
  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `${host}/api/blogs/${id}?populate=blogImage,authorInfo.profilePic`
  );

  //loading and error displays
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  //test remove if seen
  console.log(data);

  return (
    <div className={INDBLG["individualBlogPage"]}>
      <div className={INDBLG["blog-headerContainer"]}>
        <h1 className={INDBLG["blogTitle"]}>
          {data.data.attributes.blogTitle}
        </h1>
        <div className={INDBLG["auth_date-container"]}>
          <img
            src={`${host}${data.data.attributes.authorInfo.profilePic.data.attributes.formats.thumbnail.url}`}
            className={INDBLG["authorPP"]}
            alt="author"
          ></img>
          <h6 className={INDBLG["authorName"]}>
            {data.data.attributes.authorInfo.nameOfAuthor}
          </h6>
          <h6 className={INDBLG["uploadDate"]}>
            {data.data.attributes.authorInfo.dateOfUpload}
          </h6>
        </div>
      </div>
      <div className={INDBLG["ind-content"]}>
        <img
          src={`${host}${data.data.attributes.blogImage.data.attributes.url}`}
          className={INDBLG["blogImage"]}
          alt="blog"
        ></img>
        <p className={INDBLG["blogBody"]}>
          <ReactMarkdown>{data.data.attributes.blogBody}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};
