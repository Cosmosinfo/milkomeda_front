import React from 'react'
import './StoreCategory.css'
import { Link } from "react-router-dom";

function StoreCategory() {
    return (
        <>



            <div className='StoreMain_Contents_Item'>
                <Link to="/storeDetail" className="store_link">
                    <div className='StoreMain_Contents_Item_img'>

                    </div>

                        <div className='StoreMain_Contents_Item_TextBox'>
                            <div className='StoreMain_Contents_Item_TextBox_Contanier'>
                                <div className='StoreMain_Contents_Item_TextBox_Contanier_text'>
                                    <span className='StoreMain_Contents_Item_TextBox_Contanier_text_ArtistName'>아티스트</span>
                                    <span className='StoreMain_Contents_Item_TextBox_Contanier_text_Detail'>제품명</span>
                                </div>

                            <div className='StoreMain_Contents_Item_TextBox_Contanier_Money'>
                                <span className='StoreMain_Contents_Item_TextBox_Contanier_Money_text'>₩0</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>










        </>
    )
}

export default StoreCategory