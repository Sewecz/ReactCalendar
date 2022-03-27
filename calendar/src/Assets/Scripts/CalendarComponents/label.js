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
                        <button onClick={()=>this.handleChange("add")}>UP</button>
                        <button onClick={()=>this.handleChange("sub")}>DOWN</button>
                        <button className={style.yearLabel} onClick={()=>this.handleChange("y")}>2022</button>
                        <button className={style.monthLabel} onClick={()=>this.handleChange("m")}>January</button>
                    </div>
                </div>)
    }
}