import "../MyOrders/MyOrders.scss";

const MyOrders = () => {
  const tableData = [
    {
      orderId: 1,
      date: "10-02-2001",
      status: "Complete",
      total: 200.0,
      deliveryInfo: "",
    },
    {
      orderId: 2,
      date: "10-02-2001",
      status: "Complete",
      total: "200k",
      deliveryInfo: "",
    },
    {
      orderId: 3,
      date: "10-02-2001",
      status: "Complete",
      total: "200k",
      deliveryInfo: "",
    },
    {
      orderId: 4,
      date: "10-02-2001",
      status: "Complete",
      total: "200k",
      deliveryInfo: "",
    },
    {
      orderId: 5,
      date: "10-02-2001",
      status: "Complete",
      total: "200k",
      deliveryInfo: "",
    },
    {
      orderId: 6,
      date: "10-02-2001",
      status: "Complete",
      total: "200k",
      deliveryInfo: "",
    },
    {
      orderId: 7,
      date: "10-02-2001",
      status: "Complete",
      total: "200k",
      deliveryInfo: "",
    },
  ];
  return (
    <div className="my-orders-content">
      <p className="title mb-0">My Orders</p>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Delivery Information</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((order) => (
              <tr key={order.orderId}>
                <td>
                  <p className="order mb-0">{order.orderId}</p>
                </td>
                <td>
                  <p className="date mb-0">{order.date}</p>
                </td>
                <td>
                  <p className="status mb-0">{order.status}</p>
                </td>
                <td>
                  <p className="order mb-0">{order.total}</p>
                </td>
                <td>
                  <p className=" mb-0">{order.deliveryInfo}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
