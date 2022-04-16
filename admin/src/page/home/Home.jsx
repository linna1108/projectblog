import Chart from "../../components/chart/Chart";

import "./home.css";
import { userData } from "../../dummyData";


export default function Home() {
  return (
    <div className="home">
      
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
       
      </div>
    </div>
  );
}
