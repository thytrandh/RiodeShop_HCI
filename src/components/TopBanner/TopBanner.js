import "../TopBanner/TopBanner.scss";

const TopBanner = ({page}) => {
  return (
    <div className="top-banner">
      <div className="img-banner">
        <img src="/images/page-categories/top-banner/img-01.jpg" alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h2>RIODE SHOP</h2>
        </div>
        <div className="categories">
          <p className="mb-0">{page}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
