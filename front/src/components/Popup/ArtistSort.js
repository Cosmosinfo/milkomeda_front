import React from 'react'
import './ArtistSort.css'
import { useTranslation } from "react-i18next";

function ArtistSort() {

    const { t } = useTranslation();

    return (
        <>
            <div className='ArtistSort-popWrapper'>
                <div className='ArtistSort-contentItem'>
                    <div className='ArtistSort-contentItemText'>
                        {t("artistsort_elec")}
                    </div>

                </div>

                <div className='ArtistSort-contentItem'>
                    <div className='ArtistSort-contentItemText'>
                        {t("artistsort_hip")}
                    </div>

                </div>

                <div className='ArtistSort-contentItem'>
                    <div className='ArtistSort-contentItemText'>
                        {t("artistsort_metal")}
                    </div>

                </div>

                <div className='ArtistSort-contentItem'>
                    <div className='ArtistSort-contentItemText'>
                        {t("artistsort_rb")}
                    </div>

                </div>

                <div className='ArtistSort-contentItem'>
                    <div className='ArtistSort-contentItemText'>
                        {t("artistsort_jazz")}
                    </div>

                </div>

                <div className='ArtistSort-contentItem'>
                    <div className='ArtistSort-contentItemText'>
                        {t("artistsort_pop")}
                    </div>

                </div>


            </div>

        </>
    )
}

export default ArtistSort