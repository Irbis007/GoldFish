

import  './categoryBlock.css'


const CategoryBlock = ({src, alt, title, classBig}) =>{

    return(
        <div className={`category__block ${classBig}`}>
            <img src={src} alt={alt} />
            <div className="category__block-bottom">
                {title}
            </div>
        </div>
    )
}

export default CategoryBlock;