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
              <h4>MENU</h4>
              
                <ul>
                  <li><a  href="/">Homepage</a></li>
                  <li><a  href="/">Blog</a></li>
                  <li><a  href="/about">About Us</a></li>
                </ul>
              </div>
              <div className="footerContainer-3">
              <h4>VAN LANG UNIVERSITY</h4>
                <p >Main campus: 69/68 Dang Thuy Tram Street, Ward 13, Binh Thanh District, HCMC</p>
                <p>Campus 1: 45 Nguyen Khac Nhu Street, Co Giang Ward, District 1, HCMC</p>
                <p>Campus 2: 233A Phan Van Tri Street , Ward 11, Binh Thanh District, HCMC</p>
               
              </div>
            </div>
        </div>
    </div>
  )
}
