import React from "react";
import { BlogCard } from "../BlogCard";
import useFetch from "../../hooks/useFetch";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import HomeBlog from "./HomeCSSmodules/homeBlogs.module.css";
import { Link } from "react-router-dom";

export const HomeBlogs = () =>  {
    const host = "http://localhost:1337";
    const { loading, data, error } = useFetch(`${host}/api/blogs?populate=blogImage,authorInfo.profilePic`);

    if (loading) return LoadingPage;
    if (error) return ErrorPage;

    return(
        <div className={HomeBlog["homeBlogComponent"]}>
            <div className={HomeBlog["blogCardsContainer"]}>
                {data.data.slice(0,3).map((blog =>{
                    const blogImgUrl = `${host}${blog.attributes.blogImage.data.attributes.formats.medium.url}`
                    const authorImgUrl = `${host}${blog.attributes.authorInfo.profilePic.data.attributes.formats.thumbnail.url}`
                    return(
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
                    )
                }))}
            </div>
            <Link to={"/blog"} className={HomeBlog["viewMore"]}>View More Blogs..</Link>
        </div>
    )
};