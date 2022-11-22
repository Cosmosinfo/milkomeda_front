import React from 'react'
import './StoreRecoProduct.css'
import StoreFixCardData from "../../Data/StoreFixCardData"
import { useTranslation } from "react-i18next";

function StoreRecoProduct() {

  const { t } = useTranslation();

  return (
    <>


      {StoreFixCardData.cardData.map((item, index) => {
        return (
          <div className='StoreDetail_Right_Btm_Contanier'>
            <div className='StoreDetail_Right_Btm_Contanier_Item'>
              <div className='StoreDetail_Right_Btm_Contanier_Item_innerBox'>
                <div className='StoreDetail_Right_Btm_Contanier_Item_innerBox_img' >
                  <img src={item.Itemimg} className="StoreDetail_Right_Btm_Contanier_Item_innerBox_img" alt="" />
                </div>

                <div className='StoreDetail_Right_Btm_Contanier_Item_innerBox_text' >
                  <span className='StoreDetail_Right_Btm_Contanier_Item_innerBox_text_description'>{item.Description}</span>
                  <span className='StoreDetail_Right_Btm_Contanier_Item_innerBox_text_Amount'>{item.ItemMoney}{t("storecate_won")}</span>
                </div>
              </div>
            </div>

          </div>
        )
      })}


    </>
  )
}

export default StoreRecoProduct