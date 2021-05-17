import styles from '../style/Results.module.css';
import SingleResult from './SingleResult';
import { Link } from 'react-router-dom';



const Results = ({ data }) => {

    const myData = data.items;

    const renderElement = () => {
        return myData.map((book) => {
            return (
                <Link key={book.id} to={`/book/${book.id}`}>
                    < SingleResult thumbnail={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} description={book.volumeInfo.description} />
                </Link>
            )
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