import React from 'react'
import './StoreMaincard.css'
import { Link } from "react-router-dom";
import StoreMainCardData from "../../Data/StoreMainCardData"

function StoreMainCard() {
    return (
        <>

            {StoreMainCardData.cardData.map((item, index) => {
                return (
                    <div className='StoreMain_ContentItem'>
                        <Link to="/Storehome" className="link StoreMainCard">
                            <div className='StoreMain_ContentItemContainer'>
                                <div className='StoreMain_ContentItemContainerTop'>
                                    <img src={item.Brandimg} className="StoreMain_ContentItemContainerTop_Img" alt="" />
                                </div>
                                <div className='StoreMain_ContentItemContainerBtm'>
                                    <div className='StoreMain_ContentItemContainerBtmStoreName'>
                                        {item.ItemName}
                                    </div>

                                    <div className='StoreMain_ContentItemContainerBtmMusic'>
                                        {item.ItemGenre}
                                    </div>
                                </div>
                            </div>
                        </ Link >
                    </div>
                )
            })}








        </>
    )
}

export default StoreMainCard