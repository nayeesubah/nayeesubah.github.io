<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center " :class="{'header-scrolled': headerScrolledDown, ' header-transparent' : route.name=='index'}">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1>
        <a href="/">
        <img src="~/assets/img/nsf-logo.png" alt="Nayee Subah Foundation"> 
        <!-- Nayee Subah Foundation -->
        </a>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">What we do</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Gallery</a></li>
          <!-- <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li> -->
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> -->
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="btn-learn-more" href="/application-form">Join Us</a></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
</template>
<script setup>

  const route = useRoute()
  console.log('current route name', route.name)
  let headerScrolledDown = ref(false)

  function handleSCroll(event) {
      if (window.scrollY > 100) {      
        headerScrolledDown.value = true;
      }else{
        headerScrolledDown.value = false;
      }
  }
  const { select, on, onscroll, scrollto } = useSelectorHelper();

  onMounted(() => {

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
      /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
      /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()

        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)

    console.log('hi mounted header');
    window.addEventListener('scroll', handleSCroll);
  })
  
</script>