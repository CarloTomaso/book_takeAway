import styles from '../style/SingleResult.module.css';

const Results = ({ title, description, thumbnail }) => {
    const myTitle = title.slice(0, 50)
    return (
        <div className={styles.container}>
            <div style={{ padding: '5px', height: '70px' }}>
                <p>{myTitle}</p>
            </div>
            <img src={thumbnail} alt='' style={{ maxHeight: '200px' }} />
        </div>
    )
}

export default Results