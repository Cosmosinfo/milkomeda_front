import React from 'react'
import './StoreCategory.css'
import { Link } from "react-router-dom";
// import StoreItemImg from '../Carousel/StoreItemImg';
// import Oumuamua from '../../assets/img/img7.jpg'


function StoreCategory() {
    return (
        <>



            <div className='StoreMain_Contents_Item'>
                <Link to="/storeDetail" className="store_link">
                    <div className='StoreMain_Contents_Item_img'>
                        {/* <StoreItemImg/> */}
                        {/* <img className="Oumuamua" src={Oumuamua} alt="chevron" /> */}
                    </div>

                        <div className='StoreMain_Contents_Item_TextBox'>
                            <div className='StoreMain_Contents_Item_TextBox_Contanier'>
                                <div className='StoreMain_Contents_Item_TextBox_Contanier_text'>
                                    <span className='StoreMain_Contents_Item_TextBox_Contanier_text_ArtistName'>SYLK</span>
                                    <span className='StoreMain_Contents_Item_TextBox_Contanier_text_Detail'>Oumuamua Ball Chain Bracelet</span>
                                </div>

                            <div className='StoreMain_Contents_Item_TextBox_Contanier_Money'>
                                <span className='StoreMain_Contents_Item_TextBox_Contanier_Money_text'>₩150,000</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>










        </>
    )
}

export default StoreCategory