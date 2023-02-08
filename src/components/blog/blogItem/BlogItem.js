
import './blogItem.css'

const BlogItem = ({src, blogNumber}) =>{
    return(
        <div className={"blog__item " + blogNumber}>
            <img src={src} alt="blog item img" />
        </div>
    )
}

export default BlogItem;