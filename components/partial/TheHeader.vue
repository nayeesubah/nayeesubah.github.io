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
          <li><a class="nav-link scrollto" :href="url('#hero')">Home</a></li>
          <li><a class="nav-link scrollto" :href="url('#about')">About</a></li>
          <li><a class="nav-link scrollto" :href="url('#services')">What we do</a></li>
          <li><a class="nav-link scrollto " :href="url('#portfolio')">Gallery</a></li>
          <!-- <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li> -->
          <li><a class="nav-link scrollto" :href="url('#team')">Team</a></li>
          <li><a class="nav-link scrollto" :href="url('#contact')">Contact</a></li>
          <li><a class="btn-learn-more" :class="{active : route.name == 'application-form'}" href="/application-form">Join Us</a></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
</template>
<script setup>

  const route = useRoute()
  const isHomepage = ref(false);

  function url(id)  {
    let prefix = '/';
    if (route.name == 'index') {
      prefix = '';
    }
    return prefix + id;
  }

  if (route.name == 'index') {
    isHomepage.value = true;
  }
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