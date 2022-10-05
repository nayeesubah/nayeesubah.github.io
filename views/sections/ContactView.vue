<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div class="row mt-5">

          <div class="col-lg-4" data-aos="fade-right">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Vill- Kakni, Gumgi, Tisri<br> Giridih - 815317 Jharkhand</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>nsfgiridih@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 9708156668</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

            <form @submit.prevent="onSubmit" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" v-model="name" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" v-model="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" v-model="subject" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" v-model="message" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message <span v-if="displayLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button></div>
            </form>

          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->
</template>
  <script setup>
    let displayLoading = ref(false);
    const name = ref("");
    const email = ref("");
    const subject = ref("");
    const message = ref("");

    function onSubmit(e) {
      console.log('event', e)

      // if (!data.valid) {
      //   // data.markAsTouched();
      //   return;
      // }

      displayLoading.value = true;
      // console.warn('Your form data : ', data.value);
      // this.contactData.sendMessage(data.value).subscribe( (result) => {
      //   console.log('result', result)
      // })
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
    
      var formdata = new FormData();

      formdata.append("name", name.value);
      formdata.append("email", email.value);
      formdata.append("subject", subject.value);
      formdata.append("message", message.value);
      formdata.append("date", dateTime);
      // formdata.append("visitor", JSON.stringify(this.visitorDetail));

      console.log('formdata', formdata);

      fetch("https://script.google.com/macros/s/AKfycbzxBvRpyvBr1U61IP2QIx5Mns76kuf2I5XAJ8IrtXwWktnyThLXsB6Recv66WD9haXHUA/exec", {method: "POST", body: formdata})
      .then(response => response.json())
      .then(result => {
        console.log('result', result)
        displayLoading.value = false;
        // this.formModal.show();
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
        // data.reset();
      })
      .catch(error => console.log('error', error));
    }

  </script>