import React from "react";


export class Products extends React.Component{
constructor(props){
    super(props);


    this.state={food:[]}
}
render(){
const domestic = this.props.list.filter(function(food){
    return food.domestic === true
});

const imported = this.props.list.filter(function(food){
    return food.imported === true
});
    return(
        <div id="products">
            <h2>Domestic</h2>
            <ul>
        {this.props.list.food.filter(function (domestic){
        return <li> {domestic[0] === "true"}</li>
        })}
        </ul>
        <hr />
        <h2>Imported</h2>
        <ul>
        {this.props.list.food.filter(function(imported){
        return <li>{imported[0] === "true"}</li>})}

        </ul>
        
        </div>
    )
}
}