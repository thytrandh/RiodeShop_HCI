const Header = () => {
  return (
    <div className="header">
      <div class="container flex a-center j-between">
        <div class="header-left flex a-center">
          <a class="logo" href="">
            <img src="images/logo.png" alt="" />
          </a>
          <nav>
            <ul class="flex a-center j-between">
              <li>
                <a href="" style={{ color: "#2277cc" }}>
                  Home
                </a>
              </li>

              <li>
                <a href="">Categories</a>
                <i class="bi bi-chevron-down"></i>
                <ul class="menu-dropdown">
                  <li>
                    <a href="">Shoses</a>
                  </li>
                  <li>
                    <a href="">Bags</a>
                  </li>
                  <li>
                    <a href="">Accesories</a>
                  </li>
                  <li>
                    <a href="">Clothing</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="">Products</a>
                <i class="bi bi-chevron-down"></i>
                <div class="mega-box">
                  <div class="content flex j-between">
                    <div class="row flex-column">
                      <p class="product">Shoses</p>
                      <ul class="mega-links">
                        <li>
                          <a href="">Sneaker</a>
                        </li>
                        <li>
                          <a href="">Boots</a>
                        </li>
                        <li>
                          <a href="">High Heels</a>
                        </li>
                      </ul>
                    </div>

                    <div class="row flex-column">
                      <p class="product">Bags</p>
                      <ul class="mega-links">
                        <li>
                          <a href="">Backpacks</a>
                        </li>
                        <li>
                          <a href="">Fashion Bags</a>
                        </li>
                        <li>
                          <a href="">Wallet</a>
                        </li>
                      </ul>
                    </div>

                    <div class="row flex-column">
                      <p class="product">Accesories</p>
                      <ul class="mega-links">
                        <li>
                          <a href="">Watches</a>
                        </li>
                        <li>
                          <a href="">Belt</a>
                        </li>
                        <li>
                          <a href="">Glasses</a>
                        </li>
                        <li>
                          <a href="">Sock</a>
                        </li>
                        <li>
                          <a href="">Jewelly</a>
                        </li>
                        <li>
                          <a href="">Gloves</a>
                        </li>
                      </ul>
                    </div>

                    <div class="row flex-column">
                      <p class="product">Clothing</p>
                      <ul class="mega-links">
                        <li>
                          <a href="">Tops</a>
                        </li>
                        <li>
                          <a href="">Bottoms</a>
                        </li>
                        <li>
                          <a href="">Jackets</a>
                        </li>
                        <li>
                          <a href="">Dresses</a>
                        </li>
                      </ul>
                    </div>

                    <div class="row">
                      <div class="row-img">
                        <img src="images/bg-menu.jpg" alt="" />
                        <div class="title">
                          <span>SALE</span>
                          <p>70% off</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="">Pages</a>
                <i class="bi bi-chevron-down"></i>
                <ul class="menu-dropdown">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Wishlist</a>
                  </li>
                  <li>
                    <a href="">My Account</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="">Blog</a>
              </li>

              <li>
                <a href="">Contact</a>
              </li>

              <span class="divider"></span>

              <li class="search flex-column">
                <i class="bi bi-search">
                  <div class="search-box">
                    <form class="form-search">
                      <input
                        class="input-search"
                        type="text"
                        placeholder="Search your keyword..."
                      />
                    </form>
                    <ul class="search-dropdown"></ul>
                  </div>
                </i>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header-right  flex a-center j-between">
          <div class="phone flex-column">
            <span>NEED HELP?</span>
            <p>(123)456-7890</p>
          </div>
          <span class="divider"></span>
          <div class="icon-info flex a-center">
            <a href="" class="click-account">
              <i class="fal fa-user"></i>
            </a>
            <a href="">
              <i class="fal fa-heart"></i>
            </a>
            <a href="" class="cart-slide-left cart">
              <i class="fal fa-shopping-bag"></i>
              <span>
                <div class="nos">0</div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
