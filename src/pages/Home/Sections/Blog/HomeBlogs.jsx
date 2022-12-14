/* jsx to create blog section of home page */
import React from "react";
import { BlogCard } from "../../../Blog/BlogCard";
import useFetch from "../../../../hooks/useFetch";
import { LoadingPage } from "../../../../components/LoadingPage/LoadingPage";
import { ErrorPage } from "../../../../components/ErrorPage/ErrorPage";
import HomeBlog from "./homeBlogs.module.css";
import { Link } from "react-router-dom";
import { SectionHeading } from "../../../../components/SectionHeading/SectionHeading";

// function to create structure for blog section and data mapping
export const HomeBlogs = () => {
  const host = process.env.REACT_APP_STRAPI_HOST;
  const { loading, data, error } = useFetch(
    `${host}/api/blogs?populate=blogImage,authorInfo.profilePic`
  );
  // condition to open loading page while the page is loading
  if (loading) return LoadingPage;
  // condition to open error page when an error occurs
  if (error) return ErrorPage;

  return (
    <div className={HomeBlog["home-blogComponent"]}>
      <SectionHeading sectionName="Tune in into our blogs" />
      <div
        className={HomeBlog["home-blog-cardsContainer"]}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        {data.data.slice(0, 3).map((blog) => {
          const blogImgUrl = blog.attributes.blogImage.data.attributes.url;
          const authorImgUrl =
            blog.attributes.authorInfo.profilePic.data.attributes.url;
          return (
            <BlogCard
              key={blog.attributes.id}
              id={blog.id}
              slug={blog.attributes.slug}
              image={blogImgUrl}
              title={blog.attributes.blogTitle}
              body={blog.attributes.blogBody}
              authorPP={authorImgUrl}
              authorName={blog.attributes.authorInfo.nameOfAuthor}
              publishDate={blog.attributes.authorInfo.dateOfUpload}
              loadedFrom="home"
            />
          );
        })}
      </div>
      <Link
        to={"/blog"}
        className={HomeBlog["home-blog-viewMore"]}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        View More Blogs...
      </Link>
    </div>
  );
};
