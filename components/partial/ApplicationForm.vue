<template>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>Join Us</h2>
          <!-- <p>Become a Volunteer</p> -->
        </div>

        <div class="row mt-5">

          <!-- <div class="col-lg-4" data-aos="fade-right">
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

          </div> -->

          <div class="col-lg-12 mt-5 mt-lg-0" data-aos="fade-left">

            <form @submit.prevent="onSubmit" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group form-floating">
                  <input type="text" v-model="name" name="name" class="form-control" id="name" placeholder="Your Name">
                  <label for="floatingName">Your Name</label>
                </div>
                <div class="col-md-6 form-group form-floating mt-3 mt-md-0">
                  <input type="text" v-model="father_name" class="form-control" name="father_name" id="father_name" placeholder="Father's Name">
                  <label for="floatingFatherName">Father's Name</label>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-4 form-group form-floating">
                    <input type="number" v-model="phone" class="form-control" name="phone" id="phone" placeholder="Phone">
                    <label for="floatingPhone">Phone</label>
                </div>
                <div class="col-md-4 form-group form-floating mt-3 mt-md-0">
                    <input type="email" v-model="email" class="form-control" name="email" id="email" placeholder="Your Email">
                    <label for="floatingEmail">Your Email</label>
                </div>

                <div class="col-md-4 form-group form-floating mt-3 mt-md-0">
                    <input type="date" v-model="dob" class="form-control" name="dob" id="dob" placeholder="Your Date of Birth">
                    <label for="floatingDob">Date of Birth</label>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6 form-group form-floating">
                    <input type="text" v-model="profession" class="form-control" name="profession" id="profession" placeholder="Profession / Designation">
                    <label for="floatingProfession">Profession / Designation</label>
                </div>
                <div class="col-md-6 form-group form-floating mt-3 mt-md-0">
                    <input type="text" v-model="department" class="form-control" name="department" id="department" placeholder="Department / Section">
                    <label for="floatingDepartment">Department / Section</label>
                </div>
              </div>
              <div class="form-group form-floating mt-3">
                <input type="text" v-model="residential_address" class="form-control" name="residential_address" id="residential_address" placeholder="Residential Address">
                <label for="floatingResidentialAddress">Residential Address</label>
              </div>
              <div class="form-group form-floating mt-3">
                <input type="text" v-model="office_address" class="form-control" name="office_address" id="office_address" placeholder="Office Address">
                <label for="floatingOfficeAddress">Office Address</label>
              </div>
              <div class="form-group form-floating mt-3">
                <select class="form-select" aria-label="Monthly Subscription" v-model="monthly_subscription" name="monthly_subscription" id="monthly_subscription" placeholder="Monthly Subscription">
                        <!-- <option selected>Monthly Subscription</option> -->
                        <option value="₹200/-">₹200/-</option>
                        <option value="₹100/-">₹100/-</option>
                        <option value="₹500/-">₹500/-</option>
                    </select>
                <label for="floatingMonthlySubscription">Monthly Subscription</label>
              </div>
              <!-- <div class="form-group mt-3">
                <textarea class="form-control" v-model="message" name="message" rows="5" placeholder="Message"></textarea>
              </div> -->
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
    const father_name = ref("");
    const phone = ref("");
    const email = ref("");
    const dob = ref("");
    const profession = ref("");
    const department = ref("");
    const residential_address = ref("");
    const office_address = ref("");
    const monthly_subscription = ref("");

    function onSubmit(e) {
        console.log('event', office_address.value);
        displayLoading.value = true;
        const headers = {
            // "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            // "Accept": "application/json",
        };

        const nsf_form_link = `https://docs.google.com/forms/d/e/1FAIpQLSchlP02Hhp9BHMPhcRATJFprAIff_ZI6DkLvzrdVQzbXKh3Lw/formResponse?usp=pp_url&entry.625392549=${name.value}&entry.1716368597=${father_name.value}&entry.230583180=${phone.value}&entry.1373582208=${email.value}&entry.1270927980=${dob.value}&entry.994258151=${profession.value}&entry.1429577132=${department.value}&entry.616186246=${residential_address.value}&entry.2072691197=${office_address.value}&entry.644765867=Anual+(Salana)&entry.1172089541=%E2%82%B92400/-&entry.1022248178=%E2%82%B9200/-&submit=Submit`
        // console.log('nsf_form_link', nsf_form_link);
        const res = fetch(nsf_form_link, {
            method: "GET",
            mode: "no-cors",
            headers: headers,
        })
        res
        .then(result => {
            console.log('result', result)
            displayLoading.value = false;
            name.value = '';
            father_name.value = '';
            phone.value = '';
            email.value = '';
            dob.value = '';
            profession.value = '';
            department.value = '';
            residential_address.value = '';
            office_address.value = '';

        })
        .catch(error => console.log('error', error));
        console.log('res', res);
    }

  </script>