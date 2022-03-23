import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import {HistoryEduOutlined} from "@mui/icons-material";

import "../aboutus/aboutus.css";

export default function Aboutus() {
  return (
    <>
      <Topbar />
      <div className="about">
        <div className="container">
          <div className="aboutWrapper"></div>
          <div className="aboutTitle">
            <div className="Title">
              <h1>GIỚI THIỆU </h1>
              <p>&nbsp;</p>
              <p>Trường đại học Văn Lang được lấy tên theo quốc hiệu đầu tiên của nước ta, gắn với huyền sử vua Hùng dựng nước: Văn Lang. Tên gọi ấy gợi lên lòng tự hào dân tộc, nhắc nhở thế hệ trẻ gắng công học tập, góp phần làm rạng rỡ non sông. Bên cạnh đó với tâm huyết của các nhà sáng lập hướng về thế hệ trẻ, hướng về tương lai của đất nước, trong một cuộc họp tháng 11/1993, Ông Phạm Khắc Chi đã đề xuất phương châm của Trường và được các thành viên nhất trí. Phương châm đó đã trở thành một phần biểu trưng Văn Lang:</p>
              <p style={{textAlign:"center"}}>
                <span style={{color:"#cb0101",fontSize:"18px",fontWeight:"600px"}}>
                  <strong>ĐẠO ĐỨC – Ý CHÍ – SÁNG TẠO</strong>
                </span>
              </p>
            </div> 
          </div>
          <div className="aboutdesc">
            <div className="itemdesc">
               <h2><HistoryEduOutlined/>Lịch sử hình thành</h2>  
               
               <ul>
                 <li style={{textAlign:"justify"}}>Ngày 27/01/1995, Thủ tướng Chính phủ ký Quyết định số 71/TTg cho phép thành lập Trường Đại học Dân lập Văn Lang.</li>
               </ul>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
