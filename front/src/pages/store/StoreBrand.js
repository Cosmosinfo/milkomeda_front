import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Store/StoreBrand.css'
import StoreInfoCard from '../../components/ArtistInfoCard/StoreInfoCard';
import StageCard from '../../components/StageCard/StageCard'
import chevronright from '../../assets/icon/ping//chevron-right.svg'
import StoreCategory from '../../components/Store/StoreCategory'
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function StoreBrand() {

  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <div className='StoreHome'>
        <div className='StoreHome_Wrapper'>
          <StoreInfoCard />


          <div className='StoreHome_Rh'>
            <div className='StoreHome_Rh_Memu'>
              <div className='StoreHome_Rh_MemuBox'>


                <div className='StoreHome_Rh_MemuBoxTexthome'>ALL</div>

                <div className='StoreHome_Rh_MemuBox_Line'></div>

                <div className='StoreHome_Rh_MemuBoxText'>COLLAB</div>

                <div className='StoreHome_Rh_MemuBox_Line'></div>

                <div className='StoreHome_Rh_MemuBoxText'>OUTER</div>

                <div className='StoreHome_Rh_MemuBox_Line'></div>

                <div className='StoreHome_Rh_MemuBoxText'>TOP</div>

                <div className='StoreHome_Rh_MemuBox_Line'></div>

                <div className='StoreHome_Rh_MemuBoxText'>BOTTOM</div>

                <div className='StoreHome_Rh_MemuBox_Line'></div>

                <div className='StoreHome_Rh_MemuBoxText'>ACC</div>


              </div>
            </div>


            <div className='StoreHome_Rh_btm'>

              <StoreCategory />
            </div>

          </div>

        </div>
      </div>


    </>
  )
}

export default StoreBrand