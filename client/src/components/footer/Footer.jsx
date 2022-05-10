import "./footer.css"

export default function Footer() {
  return (
    <div>
     
        <div className="footer">
            <div className="footerContainer">
              <div className="footerContainer-1">
               <img className="logofooter" src = "https://i.imgur.com/okiHypt.png" ></img>
              </div>
              <div className="footerContainer-2">
              <h4>DANH MỤC KHÁC</h4>
              
                <ul>
                  <li><a  href="#">Homepage</a></li>
                  <li><a  href="#">Blog</a></li>
                  <li><a  href="#">About Us</a></li>
                </ul>
              </div>
              <div className="footerContainer-3">
              <h4>TRƯỜNG ĐẠI HỌC VĂN LANG</h4>
                <p >Cơ sở chính: 69/68 Đặng Thùy Trâm, P. 13, Q. Bình Thạnh, TP. HCM</p>
                <p>Cơ sở 1: 45 Nguyễn Khắc Nhu, P. Cô Giang, Q.1, TP. HCM</p>
                <p>Cơ sở 2: 233A Phan Văn Trị, P.11, Q. Bình Thạnh, TP. HCM</p>
              </div>
            </div>
        </div>
    </div>
  )
}
