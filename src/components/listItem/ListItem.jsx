import React, { useState } from 'react'
import style from '../../styles/ListItem.module.css'

function ListItem(props) {
    const {item} = props
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(!showDetails)
    }

    const detailsStyle = {
        height: showDetails ? "fit-content" : "0px",
        display: showDetails ? "block": "none"
    }

    function convertDate(dateStr) {
        if (!dateStr) {
            return "No date given."
        }
        const date = new Date(dateStr);
    
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    }
    
    return (
        <article className={style.container}>
            <header className={style.header}>
                <p>{item.name}</p>
                <div className={style.arrowLogo} onClick={handleShowDetails}>&darr;</div>
            </header>
            <div className={style.details} style={detailsStyle}>
                {item.crew.length < 0 &&
                    <div>
                        <p>List of crews</p>
                        <ul>
                            {item?.crew?.map((crew, index) => {
                                <li key={index}>{crew}</li>
                            })}
                        </ul>
                    </div>
                }

                <div>
                    <p>Date and time: {convertDate(item.date_local)}</p>
                </div>
                <div>
                    <p>Details: {item?.details || "no given details"}</p>
                </div>
                <div>
                    {
                        item.fairings ? 
                        <>
                            <p>reused? {item?.fairings?.reused ? 'Yes' : 'No' }</p>
                            <p>recovery attempted? {item?.fairings?.recovery_attempt ? 'Yes' : 'No'}</p>
                            <p>recovery success? {item?.fairings?.recovered ? 'Yes' : 'No' }</p>
                        </> :
                        <p>Fairings: No information</p>
                    }
                </div>

                <div>
                    <p>Links:</p>
                    <div className={style.links}>
                        {item?.links?.wikipedia && <p>Wikipedia: <a href={item?.links?.wikipedia || '#'}>{item?.links?.wikipedia || 'No Info'}</a></p> }
                        {item?.links?.article && <p>Article: <a href={item?.links?.article || '#'}>{item?.links?.article || 'No Info'}</a></p>}
                        { !item?.links?.wikipedia && !item?.links?.article && <p>No Information</p>}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ListItem