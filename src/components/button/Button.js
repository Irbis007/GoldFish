import { Children } from "react"

import './button.css'

const ButtonComponent = ({classes, ...props}) =>{

    return(
        <button className={classes}>
            {props.children}
        </button>
    )
}

export default ButtonComponent;