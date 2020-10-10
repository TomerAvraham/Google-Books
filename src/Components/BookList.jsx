import React from 'react'
import  Book  from './Book'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    cardsContainer: {
        marginTop: "30px",
        paddingLeft: "50px",
        paddingRight: "50px",
    }
})


function BookList({ books }) {
    const classes = useStyle();
    if (books) {
        return (
            <Grid container spacing={4}>
                    {books.map( (book, i) => book ? (
                        <Grid key={i} item xs={12} sm={4} md={2} className={classes.cardsContainer} >
                            <Book
                            key={i}
                            authors={book.volumeInfo.authors}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            publisher={book.volumeInfo.publisher}
                            title={book.volumeInfo.title}
                            publishedDate={book.volumeInfo.publishedDate}
                            />
                        </Grid>
                    ) : console.log("no books") )}
            </Grid>
        )
    }else{
        return null
    }
}

export default BookList





