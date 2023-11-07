import AdminSidebar from "../../components/AdminSidebar";
import { BarCharts } from "../../components/Charts";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarChart = () => {
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarCharts
            data_1={[300, 144, 433, 255, 237, 755, 190]}
            data_2={[200, 100, 555, 664, 390, 622, 255]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarCharts
            horiZontal={true}
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180, 40%, 50%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarChart;
