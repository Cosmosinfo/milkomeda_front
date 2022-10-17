import React, {useState} from 'react'
import '../../assets/css/Store/StoreMain.css'
import filter from '../../assets/icon/graw/filter.svg'
import StoreCategory from '../../components/Store/StoreCategory'
import StoreBanner from '../../components/Carousel/StoreBanner'

function StoreMain() {
    const data = ['카테고리','카테고리','카테고리','카테고리','카테고리','카테고리'];

    const [btnActive, setBtnActive] = useState("");

    const toggleActive = (e) => {
        setBtnActive((prev) => {
        return e.target.value;
        });

    }


  return (
        <>
        <div className='StoreMain'>
            <div className='StoreMain_Wrapper'>
                <div className='StoreMain_banner'>
                    <div className='StoreMain_banner_left'>

                        <StoreBanner />

                    </div>

                        <div className='StoreMain_banner_right'>
                            <img className="StoreMain_banner_right_img" src="https://i.imgur.com/8kMJMvN.jpg" alt="" />
                        </div>
                    </div>

                    {/* 추후 링크 연결 필요? */}
                    <div className='StoreMain_Category'>
                        <div className='StoreMain_Category_lf'>

                         {data.map((item, idx) => {
                                                return (
                                                <>
                                                    <button
                                                    value={idx}
                                                    className={"StreamChatBox_ChatBtn_text" + (idx === btnActive ? " active" : "")}
                                                    onClick={toggleActive}
                                                    >
                                                    {item}
                                                    </button>
                                                </>
                                                );
                        })}


                    {/* <div className='StoreMain_Category_Item'>
                        <span className='StoreMain_Category_Item_text'>카테고리</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>카테고리</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>카테고리</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>카테고리</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>카테고리</span>
                    </div>

                    <div className='StoreMain_Category_Item2'>
                        <span className='StoreMain_Category_Item_text'>카테고리</span>
                    </div> */}


                        </div>


                        <div className='StoreMain_Category_Rh'>
                           

                                <div className="StoreMain_Category_filter">
                                    <img className="StoreMain_Category_filterIcon" src={filter} alt="filter" />
                                    <span className="StoreMain_Category_filter_text">정렬</span>
                                </div>

                           






                         </div>

                    
                </div>

                <div className='StoreMain_Content'>

                        <StoreCategory />

                        


                    </div>

            </div>
        </div>
        </>
    )
}

export default StoreMain