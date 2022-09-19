import React from "react";
import useFetch from "../../hooks/useFetch";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import { BlogCard } from "../BlogCard";
import BlogsCSS from "../CSSmodules/blogs.module.css";
import MainHeading from "../MainHeading";

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
      <div className={BlogsCSS["blogPage"]}>
        <MainHeading headingName={"Our Blogs"} />
        <div className={BlogsCSS["blogCardContainer"]}>
          {data.data.map((blog) => {
            const blogImgUrl = `${host}${blog.attributes.blogImage.data.attributes.formats.medium.url}`;
            const authorImgUrl = `${host}${blog.attributes.authorInfo.profilePic.data.attributes.formats.thumbnail.url}`;
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
