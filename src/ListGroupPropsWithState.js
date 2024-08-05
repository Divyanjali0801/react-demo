import {useState} from "react";
import './ListGroupPropsWithState.css'; // Import the CSS file



interface Props{
    items : string[];
    heading : string;
}
//function ListGroupProps(props: Props)
function ListGroupPropsWithState({items,heading}: Props)//destructure props
{
    const [selectedIndex,setSelectedIndex]=useState(-1);
    const handlerClick=(item: any,index:any)=>{
        setSelectedIndex(index);
    }
    return (
        <>
            <h1>{heading}</h1>
            {items.length===0 && <p>no items found</p>}
            <ul className="list-group">
                {
                    items.map((item,index) =>
                        <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                            key={item} onClick={() => handlerClick(item,index)}>{item}</li>)
                }
            </ul>
        </>
    )
}

export default ListGroupPropsWithState;