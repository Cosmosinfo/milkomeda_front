import React from 'react'
import './StoreSort.css'
import { useTranslation } from "react-i18next";

function StoreSort() {

    const { t } = useTranslation();

    return (
        <>
            <div className='StoreSort-popWrapper'>
                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                        {t("storesort_menu_1")}
                    </div>

                </div>

                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                        {t("storesort_menu_2")}
                    </div>

                </div>

                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                        {t("storesort_menu_3")}
                    </div>

                </div>

                <div className='StoreSort-contentItem'>
                    <div className='StoreSort-contentItemText'>
                        {t("storesort_menu_4")}
                    </div>

                </div>






            </div>

        </>
    )
}

export default StoreSort