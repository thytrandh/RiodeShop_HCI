import Logo from "../../../components/UI/Logo/Logo";
import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <>
      <div class="footer-page container">
        <div class="footer-top flex j-between">
          <div class="footer-left flex j-between a-center">
            <Logo />
          </div>
          <div class="footer-right">
            <div class="item">
              <h4 className="mb-4">Get In Touch</h4>
              <ul className="content flex-column pl-0">
                <li className="phone mb-2">
                  <h5 className="mb-1">PHONE</h5>
                  <p className="mb-0">Toll Free (123) 456-7890</p>
                </li>
                <li className="email mb-2">
                  <h5 className="mb-1">EMAIL</h5>
                  <p className="mb-0">riode@mail.com</p>
                </li>
                <li className="address mb-2">
                  <h5 className="mb-1">ADDRESS</h5>
                  <p className="mb-0">123 Street, City, Country</p>
                </li>
                <li className="working-days mb-2">
                  <h5 className="mb-1">WORKING DAYS / HOURS:</h5>
                  <p className="mb-0">Mon - Sun / 9:00 AM - 8:00 PM</p>
                </li>
              </ul>
            </div>
            <div class="item">
              <h4 className="mb-4">My Account</h4>
              <ul className="content flex-column pl-0">
                <li className="mb-2">
                  <p className="mb-0">Contact Us</p>
                </li>
                <li className="mb-2">
                  <p className="mb-0">Out Services</p>
                </li>
                <li className="mb-2">
                  <p className="mb-0">Payment Methods</p>
                </li>
                <li className="mb-2">
                  <p className="mb-0">Services Guide</p>
                </li>
                <li className="mb-2">
                  <p className="mb-0">Service Support</p>
                </li>
                <li className="mb-2">
                  <p className="mb-0">Privacy</p>
                </li>
                <li className="mb-2">
                  <p className="mb-0">About Riode</p>
                </li>
              </ul>
            </div>
            <div className="item item-input">
              <h4 className="mb-4">Subscribe Newsletter</h4>
              <ul className="pl-0 flex-column">
                <li>
                  <p className="mb-0">
                    Subscribe to Riode eCommerce newsletter to receive timely
                    updates from your favourite products.
                  </p>
                </li>
                <li class="input-group flex a-center j-between">
                  <input
                    type="email"
                    id="email1"
                    name="email"
                    placeholder="Email address here..."
                  />
                  <a href="" class="btn-subcribe">
                    <p className="mb-0">
                      SUBCRIBE <i class="bi bi-arrow-right"></i>
                    </p>
                  </a>
                </li>
                <li class="contact">
                  <ul className="pl-0 flex">
                    <a href="">
                      <li class="facebook">
                        <i class="fab fa-facebook-f"></i>
                      </li>
                    </a>
                    <a href="">
                      <li class="twitter">
                        <i class="fab fa-twitter"></i>
                      </li>
                    </a>
                    <a href="">
                      <li class="instagram">
                        <i class="fab fa-instagram"></i>
                      </li>
                    </a>
                    <a href="">
                      <li class="google">
                        <i class="fab fa-google-plus-g"></i>
                      </li>
                    </a>
                    <a href="">
                      <li class="pinterest">
                        <i class="fab fa-pinterest-p"></i>
                      </li>
                    </a>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom flex a-center j-between">
          <p className="mb-0">Copyright © 2021 Riode Store. All Rights Reserved.</p>
          <div class="pay">
            <img
              src="https://d-themes.com/wordpress/riode/sport/wp-content/uploads/sites/97/2021/01/payment-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
