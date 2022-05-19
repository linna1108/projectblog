import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import { HistoryEduOutlined } from "@mui/icons-material";

import "../aboutus/aboutus.css";

export default function Aboutus() {
  return (
    <>
      <Topbar />
      <div className="about">
        <div className="container">
          <div className="aboutWrapper"></div>

          <div className="Title">
            <h1 className="aboutSm">ABOUT US</h1>
          </div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp; </p>
          <div className="aboutDesc">
            <p className="desc">
              Connection - connection is the word that ITLife.tech{" "}
              <i>( ITLife )</i> wants people to remember when they think of us,
              no matter where you live, far or near, regardless of distance
              ITLife will act as a bridge. connecting people closer together” on
              the online platform. More specifically, ITLife is a place for
              students of Information Technology Faculty of Van Lang University
              to freely express their thoughts and feelings through blog posts
              and comments.
            </p>
            <img
              className="aboutImg1"
              src="https://icdn.dantri.com.vn/thumb_w/640/2018/3/2/photo-1-1519975461577334594935.jpg"
              alt=""
            />
          </div>
          <div className="aboutIT">
            <img
              className="aboutImg2"
              src="https://tintuctuyensinh.vn/wp-content/uploads/2021/01/dai-hoc-van-lang-tuyen-sinh-2.jpg"
              alt=""
            />
            <p className="descIT">
              ITLife is a photo and video sharing social networking service
              created by Head of IT Faculty of Van Lang University invested and
              developed by The research team has 2 members, Thanh Tri and Hoai
              Linh, with permission users upload media and are sorted by tags
              start with #. Posts can be shared publicly or with your followers.
              Users can like photos, follow other users and comment on those
              posts. Outside so users can connect with each other through
              messaging directly with each other. ITLife was researched and
              developed in On March 3, 2022, it is expected to officially launch
              activities on itlife.tech on May 3, 2022.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
