import React from "react";
import BlogsCSS from "./blogs.module.css";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const BlogCard = (props) => {
  //using history instead of useNavigate because useNavigate seems to not work in this project
  const history = useHistory();
  const routeChange = () => {
    let path = `blog/${props.id}/${props.slug}`;
    history.push({
      pathname: path,
      state: { loadedFrom: props.loadedFrom },
    });
  };

  return (
    <button
      className={BlogsCSS["blogCard"]}
      onClick={() => {
        routeChange();
      }}
    >
      <img
        className={BlogsCSS["blog-headImage"]}
        src={props.image}
        alt="blog"
      />
      <div className={BlogsCSS["blog-bodySection"]}>
        <h1 className={BlogsCSS["blog-title"]}>{props.title.toUpperCase()}</h1>
        <div className={BlogsCSS["blog-body"]}>
          <ReactMarkdown>{props.body}</ReactMarkdown>
        </div>
      </div>

      <div className={BlogsCSS["blog-authorSection"]}>
        <img
          className={BlogsCSS["blog-authorImage"]}
          src={props.authorPP}
          alt="author"
        />
        <div className={BlogsCSS["blog-authorBlog"]}>
          <h6 className={BlogsCSS["blog-authorName"]}>{props.authorName}</h6>
          <hr />
          <h6 className={BlogsCSS["blog-publishDate"]}>{props.publishDate}</h6>
        </div>
      </div>
    </button>
  );
};
