import styles from '../style/Results.module.css';
import SingleResult from './SingleResult';

const fakeData = [
    { title: 'libro 1', description: '            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos nisi.' },
    { title: 'libro 2', description: '            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos nisi.' },
    { title: 'libro 3', description: '            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos nisi.' },
    { title: 'libro 4', description: '            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos nisi.' },
    { title: 'libro 5', description: '            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos nisi.' },
    { title: 'libro 6', description: '            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos nisi.' },
    { title: 'libro 7', description: '            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos nisi.' }
]

const Results = ({ data }) => {

    const myData = data.items;

    const renderElement = () => {
        return myData.map((book, i) => {
            return < SingleResult key={i} title={book.volumeInfo.title} description={book.volumeInfo.description} />
        })
    }
    return (
        <div className={styles.container} >
            <h1>Results</h1>

            <div className={styles.resultsContainer}>
                {renderElement()}
            </div>

        </div >
    )
}

export default Results