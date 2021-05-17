import Header from '../components/Header'
import Results from '../components/Results'
import Message from '../components/Message'
import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../style/SearchBar.module.css'

function Home() {
    const [data, setData] = useState([])
    const [inputText, setInputText] = useState('')
    const [loading, setLoading] = useState(false);
    /*   const fetchData = async () => {
        const MyData = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry');
        const data = await MyData.json();
        console.log(data);
    
      } */
    const fetchData = async () => {
        if (inputText.trim() == '') {
            return
        }
        await setLoading(true)
        const myData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputText}`);
        await setData(myData.data)
        await setLoading(false)


    }

    useEffect(fetchData, [])

    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    const showResults = () => {
        if (data.totalItems === 0) {
            return <Message message={'Ricerca senza risultati'} error={true} />
        } else if (data.length === 0) {
            return <Message message={'...cerca qualcosa'} />
        } else {
            return loading ? <Message message={'...sto caricando'} /> : <Results data={data} />
        }
    }

    return (
        <div className="App">

            <div className={styles.container}>
                <h2>Cerca un libro</h2>
                <div style={{ display: 'flex' }}>
                    <input value={inputText} onChange={handleInput} type="text" />
                    <button onClick={fetchData}>Cerca</button>
                </div>
            </div>
            <h1>Results</h1>
            {showResults()}
        </div>
    );
}

export default Home;
