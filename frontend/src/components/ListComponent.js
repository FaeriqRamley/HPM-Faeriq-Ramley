import React from 'react'
import {useSelector} from 'react-redux';
import CardComponent from './CardComponent';

function ListComponent(props) {
    // props.item.idList
    const cards = useSelector(state=>state.cards);

    const listCards = cards[props.item.idList];

    return (
        <div className='text-break m-2' style={{minWidth:'350px'}}>
            <h1 className='display-6'>{props.item.name}</h1>
            {listCards && listCards.map((card,index)=>
                <CardComponent key={index} card={card}/>
            )}
        </div>
    )
}

export default ListComponent;
