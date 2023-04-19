import { useState } from "react";
import ItemBanner from "../../../../components/Home/ItemBanner01/ItemBanner01";
import "../TopBanner/TopBanner.scss";
import videoBg from "../../../../assets/videos/video.mp4";
import ItemBanner01 from "../../../../components/Home/ItemBanner01/ItemBanner01";
import ItemBanner02 from "../../../../components/Home/ItemBanner02/ItemBanner02";
import ItemBanner03 from "../../../../components/Home/ItemBanner03/ItemBanner03";

const TopBanner = () => {
  const [isShow1, setIsShow1] = useState(true);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  const showBanner = (value) => {
    console.log(value);
    switch (value) {
      case 1:
        setIsShow1(true);
        setIsShow2(false);
        setIsShow3(false);
        break;
      case 2:
        setIsShow1(false);
        setIsShow2(true);
        setIsShow3(false);
        break;
      case 3:
        setIsShow1(false);
        setIsShow2(false);
        setIsShow3(true);
        break;

      default:
        break;
    }
  };

  return (
    <div className="top-banner">
      {isShow1 && <ItemBanner01 />}
      {isShow2 && <ItemBanner02 />}
      {isShow3 && <ItemBanner03 />}
      <div className="control-dots">
        <ul className="pl-0">
          <li
            className={isShow1 ? "item-dot mr-2 selected" : "item-dot mr-2"}
            onClick={() => showBanner(1)}
          >
            <img src="/images/TopBanner/banner-01.jpg" alt="" />
          </li>
          <li
            className={isShow2 ? "item-dot mr-2 selected" : "item-dot mr-2"}
            onClick={() => showBanner(2)}
          >
            <img src="/images/TopBanner/banner-02.jpg" alt="" />
          </li>
          <li
            className={isShow3 ? "item-dot mr-2 selected" : "item-dot mr-2"}
            onClick={() => showBanner(3)}
          >
             <video src={videoBg} loop autoplay="" muted />
            {/* <img src="/images/TopBanner/banner-03.jpg" alt="" /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBanner;
