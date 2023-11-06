import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import userImg from "../assets/userpic.png";
import data from "../assets/data.json";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* ======================SideBar============================== */}
      <AdminSidebar />
      {/*================== Main================================================= */}
      <main className="dashboard">
        {/* heading */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        {/* =========================Widget===================================================  */}
        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            amount={false}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            amount={true}
            value={23000}
            heading="Transactions"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={30}
            amount={false}
            value={1000}
            heading="Productss"
            color="rgb(76,0,255)"
          />
        </section>
        {/* =========================Graph ======================================================== */}
        <section className="graphContainer">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Graphs Inseted Here */}
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((category) => (
                <CategoryItem
                  key={category.heading}
                  heading={category.heading}
                  value={category.value}
                  color={`hsl(${category.value * 4},100%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
