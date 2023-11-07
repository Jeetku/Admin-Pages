import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHoc";
import { Link } from "react-router-dom";
import { Column } from "react-table";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sdaskdnkasjdn">Manage</Link>,
  },
  {
    user: "John",
    amount: 5500,
    discount: 200,
    quantity: 32,
    status: <span className="purple ">Shipped</span>,
    action: <Link to="/admin/transaction/sdaskdnkasjdn">Manage</Link>,
  },
  {
    user: "Tom Muddy",
    amount: 7500,
    discount: 400,
    quantity: 13,
    status: <span className="green">Delivered</span>,
    action: <Link to="/admin/transaction/sdaskdnkasjdn">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
