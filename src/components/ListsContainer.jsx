import React, { useEffect, useState } from 'react'
import {lazy, Suspense} from 'react'
import style from '../styles/ListsContainer.module.css'
const ListItem = lazy(() => import('./listItem/ListItem'))

function ListsContainer(props) {
    const { data, isLoading } = props
    const [currentIndex, setCurrentIndex] = useState(0);

    const loadMoreItems = () => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const reachedBottom = scrollTop + clientHeight >= scrollHeight;
        if (reachedBottom) {
            setCurrentIndex(prevIndex => prevIndex + 100);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', loadMoreItems);
        return () => {
            window.removeEventListener('scroll', loadMoreItems);
        };
    }, []);


    const listItems = data.slice(0, currentIndex + 100).map(item => (
        <ListItem item={item} key={item.id} />
    ));


    return (
        <section className={style.container}>
            <Suspense fallback={<div>Loading....</div>}>
                {listItems}
                { currentIndex > data.length && <div>You have reached the end</div>}
            </Suspense>
        </section>
    )
}

export default ListsContainer