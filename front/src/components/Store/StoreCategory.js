import React from 'react'
import './StoreCategory.css'
import { Link } from "react-router-dom";
// import StoreItemImg from '../Carousel/StoreItemImg';
import StoreCardData from "../../Data/StoreCardData"

import { useTranslation } from "react-i18next";



function StoreCategory() {

    const { t } = useTranslation();
    // const [storeitemCard, setStoreitemCard] = useState(6)
    // const more = StoreCardData.cardData.slice(0, storeitemCard)
    return (
        <>


            {StoreCardData.cardData.map((item, index) => {
                return (
                    <div className='StoreMain_Contents_Item'>
                        <Link to="/storeDetail" className="store_link">
                            <div className='StoreMain_Contents_Item_img'>

                                <img src={item.Itemimg} className="home_Stage_Top_thumbnailImg" alt="" />
                            </div>

                            <div className='StoreMain_Contents_Item_TextBox'>
                                <div className='StoreMain_Contents_Item_TextBox_Contanier'>
                                    <div className='StoreMain_Contents_Item_TextBox_Contanier_text'>
                                        <span className='StoreMain_Contents_Item_TextBox_Contanier_text_ArtistName'>{item.ArtistName}</span>
                                        <span className='StoreMain_Contents_Item_TextBox_Contanier_text_Detail'>{item.ItemDetail}</span>
                                    </div>

                                    <div className='StoreMain_Contents_Item_TextBox_Contanier_Money'>
                                        <span className='StoreMain_Contents_Item_TextBox_Contanier_Money_text'>{item.ItemMoney}{t("storecate_won")} </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}











        </>
    )
}

export default StoreCategory