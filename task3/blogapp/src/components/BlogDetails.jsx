import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='text-xl'>{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='font-semibold'>{post.author } </span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p className='font-semibold'> Posted on {post.date} </p>
      <p> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='font-bold'>{` #${tag}`}  </span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
