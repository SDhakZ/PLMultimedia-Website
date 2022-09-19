import React from "react";
import BlogsCSS from "./CSSmodules/blogs.module.css";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const BlogCard = (props) => {
  //using history instead of useNavigate because useNavigate seems to not work in this project
  const history = useHistory();
  const routeChange = () => {
    let path = `blog/${props.id}/${props.slug}`;
    history.push(path);
  };

  return (
    <button
      className={BlogsCSS["blogCard"]}
      onClick={() => {
        routeChange();
      }}
    >
      <img className={BlogsCSS["blogHeadImage"]} src={props.image} alt="blog" />
      <div className={BlogsCSS["blogBodySection"]}>
        <h1 className={BlogsCSS["blogTitle"]}>{props.title.toUpperCase()}</h1>
        <p className={BlogsCSS["blogBody"]}>
          <ReactMarkdown>{props.body}</ReactMarkdown>
        </p>
      </div>

      <div className={BlogsCSS["authorSection"]}>
        <img
          className={BlogsCSS["authorImage"]}
          src={props.authorPP}
          alt="author"
        />
        <div className={BlogsCSS["authorBlog"]}>
          <h6 className={BlogsCSS["authorName"]}>{props.authorName}</h6>
          <hr />
          <h6 className={BlogsCSS["publishDate"]}>{props.publishDate}</h6>
        </div>
      </div>
    </button>
  );
};
