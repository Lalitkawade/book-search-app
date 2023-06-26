import React from "react";
import "./BookItem.css"
import NestedModal from "./Description";


const BookItem = (props) => {

    const { bookDetails } = props
    const { author, selfLink, description, title } = bookDetails

    return (

        <div>
            <li>
                <img src={selfLink} alt="title" />
                <h3>Title: {title}</h3>
                <h4>Author: {author}</h4>
                <NestedModal description={description} />
            </li>

        </div>


    )
}

export default BookItem;