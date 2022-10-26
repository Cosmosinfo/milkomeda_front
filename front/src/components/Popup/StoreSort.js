import React from 'react'
import './StoreSort.css'

function StoreSort() {
  return (
    <>
            <div className='StoreSort-popWrapper'>
                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                    최신등록순
                    </div>

                </div>

                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                        높은가격순
                    </div>

                </div>

                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                        낮은가격순
                    </div>

                </div>

                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                        인기도순
                    </div>

                </div>

                
                


                
            </div>

        </>
  )
}

export default StoreSort