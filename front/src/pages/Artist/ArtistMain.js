import { React, useState, useRef, useEffect } from "react";
import '../../assets/css/Artist/ArtistMain.css'
import filter from '../../assets/icon/graw/filter.svg'
import ArtistMainCard from '../../components/ArtistMainCard/ArtistMainCard'
import ArtistSort from '../../components/Popup/ArtistSort'
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function ArtistMain() {

  // 다국어
  const { t } = useTranslation();


  const dropdownRef = useRef(null);
  const curRef = useRef(true);

  const [openAtSort, setOpenAtSort] = useState(false);

  useEffect(() => {
    console.log('useEffect')
    const pageClickEvent = (e) => {
      if (curRef.current) {
        curRef.current = false;
        return;
      } else {
        curRef.current = true;
      }

      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setOpenAtSort(!openAtSort);

      }
    };

    // If the item is active (ie open) then listen for clicks
    if (openAtSort) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }





  }, [openAtSort]);
  return (
    <>
      <Topbar />
      <div className='ArtistMain'>
        <div className='ArtistMain_Wrapper'>
          <div className='ArtistMain_top'>
            <div className='ArtistMain_top_lf'>
              <span className='ArtistMain_topText'>
                {t("artist_artist")}
              </span>

            </div>



            <div className='ArtistMain_top_rh'>
              <img className="ArtistMain_sortimg" src={filter} alt="filter" />
              {/* <span className='ArtistMain_imgBox_text'>정렬</span> */}
              <button className='ArtistMain_imgBox_text' onClick={() => {
                setOpenAtSort(!openAtSort)
                curRef.current = true;
              }}>
                {t("stream_sort")}
              </button>

              <nav
                ref={dropdownRef}
                className={`Stream_menus ${openAtSort ? "active" : "inactive"}`}
              >
                <ArtistSort />
              </nav>
            </div>



          </div>

          <div className='ArtistMain_btm'>
            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

          </div>




        </div>


      </div>



    </>
  )
}

export default ArtistMain