import { Component } from 'react'


import './menuItem.css'

class MenuItem extends Component{
    constructor(props) {
        super(props)

        this.state = {
            hover: false
        }
    }

    onHover = () =>{
        this.setState(({hover}) => ({
            hover: !hover
        }))
    }

    onLeave = () =>{
        this.setState(({hover}) =>({
            hover: !hover
        }))
    }

    render() {
        let styles = {}
        let arrowColor = '#C8C5C3'
        if(this.state.hover) {
            styles = {
                'backgroundColor': '#F9A43F'
            }
            arrowColor = 'black'
        }

        return(
            <div className="categories__list-item" onMouseEnter={this.onHover} style={styles} onMouseLeave={this.onLeave}>
                {this.props.text}
                <div className="categories__list-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill={arrowColor}/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default MenuItem