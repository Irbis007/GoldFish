
import BlogItem from './blogItem/BlogItem'

import './blog.css'

import blogItem1 from '../../images/blog-item1.jpg'

const BlogContent = () =>{
    return(
        <div className="blog">
            <div className="container">
                <div className="blog__title">Blog</div>
                <div className="blog__content">
                    <div className="contetn__wrapper">
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                    </div>
                    <div className="contetn__wrapper">
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                    </div>
                    <div className="contetn__wrapper">
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                    </div>
                    <div className="contetn__wrapper">
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                        <BlogItem src={blogItem1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent