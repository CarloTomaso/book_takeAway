import { useState, useEffect } from 'react';
import styles from '../style/Book.module.css'
import axios from 'axios';

const Book = (props) => {
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        const bookId = props.match.params.id;
        const bookData = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        await setBookData(bookData.data.volumeInfo)
        setLoading(false)
    }, [])

    return loading ? <p> Carico </p> : (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div>
                    <h2>{bookData.title}</h2>
                    <p>{bookData.description}</p>
                    <h4>Autore: {bookData.authors[0]}</h4>
                </div>


                <img className={styles.image} src={bookData.imageLinks.thumbnail} alt="" />
            </div>
            <div className={styles.chapterContainer}>

            </div>

        </div>
    );
}

export default Book;