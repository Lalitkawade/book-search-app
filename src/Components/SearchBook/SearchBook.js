import React, { useState } from 'react'
import { v4 } from "uuid"
import './SearchBook.css'
import BookItem from '../BookItem/BookItem'


const SearchBook = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState()

    const getSearchResult = async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        const data = await response.json()
        console.log(data)
        const updateDate = data?.items?.map(each => ({
            id: v4(),
            author: each?.volumeInfo?.authors,
            selfLink: each?.volumeInfo?.imageLinks?.thumbnail,
            title: each?.volumeInfo?.title,
            description: each?.volumeInfo?.description
        }))
        setSearchResults(updateDate)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getSearchResult()
        }
    }

    return (

        <div>
            <header>
                <h1>
                    Book Search App
                </h1>
                <input onKeyDown={handleKeyDown} onChange={(e) => setSearchTerm(e.target.value)} type='search' placeholder='Enter Book Name' />
            </header>
            <main>
                <ul>
                    {searchResults?.map(each => <BookItem key={each.id} bookDetails={each} />)}
                </ul>
            </main>
        </div>


    )
}

export default SearchBook;
