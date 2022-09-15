<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <!-- <h3><img style="max-width: 220px;" src="assets/img/nsf-logo.png" alt="Nayee Subah Foundation Logo"></h3> -->
              <!-- <p>
                  "Every act of goodness is charity even if it is just a smile"
                  <span class="comment-time">-- Prophet Mohammed --</span>
              </p> -->
              <p>
                Vill- Kakni, Gumgi, Tisri<br> Giridih - 815317 Jharkhand  <br><br>
                <strong>Phone:</strong> +91 9708156668 <br>
                <strong>Email:</strong> nsfgiridih@gmail.com<br>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">What we do</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Gallery</a></li>
              <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> -->
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Library</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Coaching Center</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Health Care Center</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Career Guidance</a></li>
              <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li> -->
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Donation</h4>
            <p>Your Support Will Help A Child Come Out Of The Vicious Cycle Of Generational Poverty Through Education, Health Care And Good Upbringing</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Nayee Subah Foundation</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://Irfatech.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://Irfatech.com/restaurantly-restaurant-template/ -->
        Designed by <a href="https://Irfatech.com/">Irfan</a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center" :class="{ 'active' : backtotopScrolledDown }"><i class="bi bi-arrow-up-short"></i></a>
</template>
  <script setup>
    let backtotopScrolledDown = useHandleSCroll(window, 'scroll');
    const { select, scrollto } = useSelectorHelper();

    onMounted(() => {
      let preloader = select('#preloader');
      preloader.remove()
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    })
  </script>
