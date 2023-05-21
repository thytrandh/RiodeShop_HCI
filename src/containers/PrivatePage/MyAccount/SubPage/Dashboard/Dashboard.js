import "../Dashboard/Dashboard.scss";

const Dashboard = ({userName}) => {
  return (
    <div className="dashboard-content">
      <p className="mb-1">
        Hello <span>{userName}</span>
      </p>
      <p className="mb-4">
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </p>
      <div className="btn-go-to-shop">
        <p className="mb-0">GO TO SHOP</p>
      </div>
    </div>
  );
};

export default Dashboard;
