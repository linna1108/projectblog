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
          <div className="aboutTitle">
            <div className="Title">
              <h1>GIỚI THIỆU </h1>
              <p>&nbsp;</p>
              <p>
                Connection – sự kết nối là từ mà ITLife.tech(được viết tắt là
                ITLife) muốn mọi người nhớ tới khi nhắc về chúng tôi, dù bạn ở
                bất kỳ đâu, dù xa hay gần bất kể khoảng cách ITLife sẽ làm cầu
                nối để kết nối mọi người lại “gần” với nhau hơn trên nền tảng
                trực tuyến.
              </p>
                   
              <p>
                ITLife là một dịch vụ mạng xã hội chia sẻ hình ảnh và video do
                chính Khoa CNTT trường Đại học Văn Lang đầu tư và phát triển bởi
                nhóm nghiên cứu 2 thành viên là Thanh Trí và Hoài Linh, cho phép
                người dùng tải lên các phương tiện và được sắp xếp theo các thẻ
                bắt đầu bằng #. Bài đăng có thể được chia sẻ công khai hoặc với
                những người theo dõi bạn. Người dùng có thể thích ảnh, theo dõi
                những người dùng khác và bình luận trên những bài viết đó. Ngoài
                ra các người dùng có thể kết nối với nhau qua hình thức nhắn tin
                trực tiếp với nhau. ITLife được nghiên cứu và phát triển vào
                ngày 03/03/2022, dự tính sẽ triển khai hoạt động chính thức trên
                itlife.tech vào ngày 03/05/2022.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
