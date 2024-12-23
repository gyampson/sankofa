const headerHTML = `

<header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="index.html" class="logo">
                <img class="logo1" src="assets/images/logo2.jpg" />
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section">
                  <a href="index.html" class="active">Home</a>
                </li>
                <li class="scroll-to-section"><a href="men.html">Men's</a></li>
                <li class="scroll-to-section"><a href="women.html">Women's</a></li>
                <li class="scroll-to-section"><a href="kids.html">Kid's</a></li>
                <li class="submenu">
                  <a href="javascript:;">Pages</a>
                  <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="chatbot.html">Chat with AI</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </li>
                <li class="scroll-to-section">
                  <a href="signup.html">Signup</a>
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
`;
document.body.insertAdjacentHTML("beforeend", headerHTML);
