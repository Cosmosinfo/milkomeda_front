import React from 'react'
import './StreamSort.css'
import { useTranslation } from "react-i18next";


function StreamSort() {

    // 다국어
    const { t } = useTranslation();

    return (
        <>
            <div className='StreamSort-popWrapper'>
                <div className='StreamSort-contentItem'>
                    <div className='StreamSort-contentItemText'>
                        {t("streamsort_user")}
                    </div>

                </div>

                <div className='StreamSort-contentItem'>
                    <div className='StreamSort-contentItemText'>
                        {t("streamsort_artist")}
                    </div>

                </div>


            </div>

        </>
    )
}

export default StreamSort