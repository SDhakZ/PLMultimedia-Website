import React from "react";
import useFetch from "../../hooks/useFetch";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import { BlogCard } from "./BlogCard";
import BlogsCSS from "./blogs.module.css";
import MainHeading from "../../components/MainHeading/MainHeading";

export const Blog = () => {
  //change this according to where the strapi admin is hosted
  const host = "http://localhost:1338";
  const { loading, data, error } = useFetch(
    `${host}/api/blogs?populate=blogImage,authorInfo.profilePic`
  );

  //loading and error displays
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  //testing (remove if seen)
  console.log({ data });

  //maping Blog card with strapi blogs data
  return (
    <React.Fragment>
      <div className={BlogsCSS["blog-page"]}>
        <MainHeading headingName={"Our Blogs"} />
        <div
          className={BlogsCSS["blogCard-container"]}
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          {data.data.map((blog) => {
            const blogImgUrl = `${host}${blog.attributes.blogImage.data.attributes.url}`;
            const authorImgUrl = `${host}${blog.attributes.authorInfo.profilePic.data.attributes.url}`;
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
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
