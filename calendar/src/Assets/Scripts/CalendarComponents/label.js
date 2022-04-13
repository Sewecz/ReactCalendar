import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"

export default class Label extends React.Component{
    constructor(props) {
        super(props)

        this.handleChange = props.handleChange
    }

    render(){
        return (<div className={style.label}>
            <h1>Calednar</h1>
                    <div className={style.buttonHolder}>
                        <button className={style.yearLabel} onClick={()=>this.handleChange("y")}>Month</button>
                        <button className={style.monthLabel} onClick={()=>this.handleChange("m")}>Year</button>
                        <button className={style.monthLabel} onClick={()=>this.handleChange("d")}>Day</button>
                    </div>
                </div>)
    }
}