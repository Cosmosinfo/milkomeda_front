import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/MainPage/featuredInfo/FeaturedInfo";
import "../../assets/css/Main/home.css";
import { userData } from "../../dummyData";
import Carousel from "../../components/MainPage/Carousel/Carousel";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import NewArtist from "../../components/MainPage/NewArtist/NewArtist";

export default function Home() {
  return (
    <div className="home">

      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User" /> */}
      <div className="HomeCarousel">

        <Carousel />
      </div>

      <div className="HomeArtist">
        <h3>New Artist</h3>
      </div>

      <div className="ArtistItem">
        <NewArtist />
      </div>

      <div className="LiveStage">
        <span className="Live">Live</span>&nbsp;
        <span className="Stage">Stage</span>
      </div>

      <div className="StageItem">



      </div>

      <WidgetSm />
    </div>

  );
}
