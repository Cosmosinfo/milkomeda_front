import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "../../assets/css/home.css";
import { userData } from "../../dummyData";
import Carousel from "../../components/Carousel/Carousel";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">

      {/* <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" /> */}
      <div className="HomeCarousel">
        <Carousel />
      </div>
    </div>

  );
}
