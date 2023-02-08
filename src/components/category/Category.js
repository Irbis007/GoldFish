
import CategoryBlock from './categoryBlock/CategoryBlock';


import './category.css'
import category1 from '../../images/category1.jpg'
import category2 from '../../images/category2.jpg'
import category3 from '../../images/category3.jpg'
import category4 from '../../images/category4.jpg'
import category5 from '../../images/category5.jpg'


const Category = () =>{

    return (
        <div className="category__section">
            <div className="container">
            <div className="category__section-title">Catalog</div>
            <div className="category__block-wrapper">
                <CategoryBlock src={category1} alt={'Table-games'} title={'Table games'} classBig={'category__block-main'}/>
                <CategoryBlock src={category2} alt={'Wargames'} title={'Wargames'}/>
                <CategoryBlock src={category3} alt={'Paints'} title={'Paints'}/>
                <CategoryBlock src={category4} alt={'Magic:the-Cathering'} title={'Magic:the Cathering'}/>
                <CategoryBlock src={category5} alt={'Whole-catalog'} title={'Whole catalog'}/>
            </div>
            </div>
        </div>
    )
}


export default Category;