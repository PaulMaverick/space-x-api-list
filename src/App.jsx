import { Suspense, useEffect, useState } from 'react'
import Header from './components/Header'
import styles from './styles/App.module.css'
import { getSpaceXAPI } from './API/spaceXAPI'
import ListsContainer from './components/ListsContainer'
import LoadingData from './components/loading/LoadingData'
import ErrorData from './components/errors/ErrorData'


function App() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    //fetching data
    useEffect(() => {
        async function getSpaceXData() {
            try {
                setIsLoading(true)
                const apiData = await getSpaceXAPI()
                console.log(apiData)
                setData(apiData)
                setIsLoading(false)
            } catch (error) {
                //error handling
                setErrorMessage(error.message)
                setIsLoading(false)
            }
        }
    
        getSpaceXData()
    },[])
    

    return (
        <main className={styles.mainContainer}>
            <Header />
            {  
                data && <ListsContainer data={data}/>
            }
            {
                isLoading && <LoadingData />
            }
            {
                errorMessage && <ErrorData errorMessage={errorMessage}/>
            }
        </main>
    )
}

export default App


