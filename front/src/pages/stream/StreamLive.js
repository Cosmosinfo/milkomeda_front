import React from "react";
import { Link } from "react-router-dom";
import Share from "../../assets/icon/graw/share-2.svg";
import Report from "../../assets/icon/graw/alert-triangle.svg";
import "../../assets/css/Stream/StreamLive.css";
import StreamChatBox from "../../components/StreamLiveChat/StreamChatBox";
import Topbar from "../../components/topbar/Topbar";
import flv from "flv.js";
import axios from "axios";
import queryString from "query-string";

class StreamLive extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  state = {
    data: null,
  };

  componentDidMount() {
    // const { id } = this.props.match.params;
    // this.props.fetchStream(id);
    this.data();
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.videoRef = React.createRef();
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  async data() {
    let qs = queryString.parse(window.location.search);

    await axios
      .post("http://52.53.207.20:8080/api/stage/findIdLiveList", { stageStreamKey: qs.streamKey })
      .then((res) => this.setState({ data: res }));
  }

  buildPlayer() {
    let qs = queryString.parse(window.location.search);
    console.log(qs.streamKey);
    // const { id } = this.props.match.params;
    // const response = await axios.post("http://52.53.207.20:8080/api/stage/findIdLiveList", { stageStreamKey: qs.streamKey });

    // console.log(response);

    // if (this.player) {
    //   return;
    // }

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://52.53.207.20:8000/live/${qs.streamKey}`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

    // const { id } = this.props.match.params;

    // this.player.play();
  }

  render() {
    const { data } = this.state;

    console.log(this.videoRef);

    return (
      <>
        <Topbar />
        {data && (
          <div className="StreamLive">
            <div className="StreamLive_Wrapper">
              <div className="StreamLive_Wrapper_container">
                <div className="StreamLive_left">
                  {/* Streaming 라이브 뷰 */}
                  <div className="StreamLive_LiveView">
                    <video
                      ref={this.videoRef}
                      style={{ width: "100%" }}
                      poster="https://image.sbs.co.kr/news/m/thum_m_offair.jpg"
                      controls
                    />
                  </div>

                  {/* Streaming 타이틀 및 내용 */}
                  <div className="StreamLive_LiveDetails">
                    {/* Streaming 타이틀 */}
                    <div className="StreamLive_Title">
                      <span className="StreamLive_Title_text">{data.data.streams[0].stageTitle}</span>
                      <div className="StreamLive_Title_right">
                        <div className="StreamLive_Title_right_Share">
                          <img className="StreamLive_Title_right_ShareIcon" src={Share} alt="Share" />
                          <span className="StreamLive_Title_right_Share_text">공유</span>
                        </div>

                        <div className="StreamLive_Title_right_Report">
                          <img className="StreamLive_Title_right_ReportIcon" src={Report} alt="Report" />
                          <span className="StreamLive_Title_right_Report_text">신고</span>
                        </div>
                      </div>
                    </div>

                    {/* Streaming 상세내용 */}

                    <div className="StreamLive_Content_Info">
                      {/* Streaming 주소 */}
                      <div className="StreamLive_Content_Info_address">
                        <div className="StreamLive_address_Container">
                          <div className="StreamLive_address_Container_left">
                            <img
                              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                              alt=""
                              className="StreamLive_address_img"
                            />
                          </div>
                          <div className="StreamLive_address_Container_right">
                            <div className="StreamLive_address_Container_Namebox">
                              <span className="StreamLive_address_Container_Namebox_Location">공연 장소</span>
                            </div>
                            <div className="StreamLive_address_Container_Namebox_LocationAddr">
                              <span className="StreamLive_address_Container_Namebox_LocationAddr_text">
                                {data.data.streams[0].stageLocation}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Streaming 날짜 */}
                      <div className="StreamLive_Content_Info_Date">
                        <div className="StreamLive_Content_Info_Date_textBox">
                          <span className="StreamLive_Content_Info_Date_textBox_text">날짜/시간</span>
                          <span className="StreamLive_Content_Info_year_textBox_text">{data.data.streams[0].stageTimestamp}</span>
                        </div>
                      </div>
                      {/* Streaming 아티스트 이름 */}
                      <div className="StreamLive_Content_Info_ArtistName">
                        <Link to="/login" className="link">
                          <div className="StreamLive_Content_Info_ArtistName_contanierBox">
                            <img
                              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                              alt=""
                              className="StreamLive_Artist_img"
                            />

                            <div className="StreamLive_Content_Info_ArtistName_contanier_textBox">
                              <span className="StreamLive_Content_Info_ArtistName_contanier_text">Lubless</span>
                            </div>
                          </div>
                        </Link>

                        <div className="StreamLive_Content_Info_ArtistName_contanierBox">
                          <img
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="StreamLive_Artist_img"
                          />

                          <div className="StreamLive_Content_Info_ArtistName_contanier_textBox">
                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                          </div>
                        </div>

                        <div className="StreamLive_Content_Info_ArtistName_contanierBox">
                          <img
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="StreamLive_Artist_img"
                          />

                          <div className="StreamLive_Content_Info_ArtistName_contanier_textBox">
                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                          </div>
                        </div>

                        <div className="StreamLive_Content_Info_ArtistName_contanierBox">
                          <img
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="StreamLive_Artist_img"
                          />

                          <div className="StreamLive_Content_Info_ArtistName_contanier_textBox">
                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                          </div>
                        </div>

                        <div className="StreamLive_Content_Info_ArtistName_contanierBox">
                          <img
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="StreamLive_Artist_img"
                          />

                          <div className="StreamLive_Content_Info_ArtistName_contanier_textBox">
                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                          </div>
                        </div>

                        <div className="StreamLive_Content_Info_ArtistName_contanierBox">
                          <img
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="StreamLive_Artist_img"
                          />

                          <div className="StreamLive_Content_Info_ArtistName_contanier_textBox">
                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="StreamLive_Content_Details">
                      <div className="StreamLive_Content_Details_text">
                        <div>[I've gotta feelin' like]</div>

                        <br />

                        <div>Dust in the air, blurred sight and it makes me feel like high</div>

                        <br />

                        <div>music : https://linksalad.net/US06go_3Wf</div>

                        <br />

                        <div>
                          PRODUCED BY BONGWOO, LENA, 투영
                          <br />
                          COMPOSED BY BONGWOO, LENA, 투영
                          <br />
                          LYRICS BY BONGWOO, LENA, 투영
                          <br />
                          ARRANGED BY 투영
                        </div>

                        <br />

                        <div>
                          VOCAL & CHORUS BY LENA
                          <br />
                          DRUM, BASS, KEYBOARD, SYNTHESISER BY 투영
                        </div>

                        <br />

                        <div>
                          RECORDED BY 오혜석 @MOL STUDIO
                          <br />
                          MIXED BY 신유식, 투영
                          <br />
                          MASTERED BY 강승희 @SONIC KOREA
                          <br />
                          LYRIC VIDEO BY BONGWOO
                        </div>

                        <br />

                        <div>-------------------------------------------</div>

                        <br />

                        <div>
                          밴드 러블레스 Lubless
                          <br />
                          "Lust bless you. Follow your heart."
                          <br />
                          어딘가 고장 난 어른들을 위한 동화
                        </div>

                        <br />

                        <div>
                          공식 홈페이지 - <a href="https://lublessofficial.com">https://lublessofficial.com</a> <br />
                          페이스북 （Facebook）- <a href="https://facebook.com/lublessofficial">https://facebook.com/lublessofficial</a>
                          <br />
                          인스타그램 （Instagram）-{" "}
                          <a href="https://instagram.com/lubless_official">https://instagram.com/lubless_official</a>
                          <br />
                          트위터 （Twitter）- <a href="https://twitter.com/lublessoffical">https://twitter.com/lublessoffical</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ====================  StreamLive_Right  ======================== */}
                <div className="StreamLive_Right_Wrapper">
                  <StreamChatBox />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   return { stream: state.streams[ownProps.match.params.id] };
// };

export default StreamLive;
