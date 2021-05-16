import styles from '../style/Results.module.css';
import SingleResult from './SingleResult';



const Results = ({ data }) => {

    const myData = data.items;

    const renderElement = () => {
        return myData.map((book, i) => {
            return < SingleResult key={i} thumbnail={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} description={book.volumeInfo.description} />
        })
    }
    return (
        <div className={styles.container} >


            <div className={styles.resultsContainer}>
                {renderElement()}
            </div>

        </div >
    )
}

export default Results