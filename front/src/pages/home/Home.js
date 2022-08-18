import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/MainPage/featuredInfo/FeaturedInfo";
import "../../assets/css/Main/home.css";
import { userData } from "../../dummyData";
import Carousel from "../../components/MainPage/Carousel/Carousel";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import NewArtist from "../../components/MainPage/NewArtist/NewArtist";
import LiveStage from "../../components/MainPage/LiveStage/LiveStage";
import chevron from '../../assets/icon/ping/chevron-down.svg'
import UpcomingStage from "../../components/MainPage/UpcomingStage/UpcomingStage"

export default function Home() {
  return (
    <div className="home">

      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User" /> */}
      <div className="HomeCarousel">

        <Carousel />
      </div>

      <div className="ArtistItem">
        <NewArtist />
      </div>

      <div className="LiveStage">
        <span className="Live">Live</span>&nbsp;
        <span className="Stage">Stage</span>
      </div>

      <div className="StageItem">

        <LiveStage />

      </div>

      <div className="hr-sect">
        More
        <img className="chevron" src={chevron} alt="chevron" />
      </div>
      <div className="UpcomingStage">
        <h3>Upcoming Stage</h3>
      </div>
      <div className="UpcomingStageItem">

        <UpcomingStage />

      </div>
    </div>

  );
}
