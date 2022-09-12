import React from 'react'
import '../../assets/css/Store/StoreMain.css'
import filter from '../../assets/icon/graw/filter.svg'
import StoreCategory from '../../components/Store/StoreCategory'

function StoreMain() {
  return (
    <>
        <div className='StoreMain'>
            <div className='StoreMain_Wrapper'>
                <div className='StoreMain_banner'>
                    <div className='StoreMain_banner_left'>
                    banner
                    </div>

                    <div className='StoreMain_banner_right'>
                    banner
                    </div>
                </div>

                {/* 추후 링크 연결 필요? */}
                <div className='StoreMain_Category'>
                    <div className='StoreMain_Category_lf'>


                    <div className='StoreMain_Category_Item'>
                        <span className='StoreMain_Category_Item_text'>Category</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>Category</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>Category</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>Category</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>Category</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>Category</span>
                    </div>


                    </div>
                   

                    <div className='StoreMain_Category_Rh'>
                    <div className="StoreMain_Category_filter">
                        <img className="StoreMain_Category_filterIcon" src={filter} alt="filter" />
                        <span className="StoreMain_Category_filter_text">Sort</span>
                    </div>
                             
                        </div>
                    
                              
                    

                    

                    
                </div>

                <div className='StoreMain_Content'>
                    
                    <StoreCategory />
                    
                    <StoreCategory />

                    <StoreCategory />
                    

                </div>
            </div>

        </div>
    
    </>
  )
}

export default StoreMain