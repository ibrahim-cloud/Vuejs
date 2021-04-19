<style scoped>

</style>
<template>
 <form  id="signup-form" @submit.prevent="handelSubmit">
     <div class="row">
         <div  class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control form-control-lg"  id="email" placeholder="Email" v-model="form2.email"     >
            </div>
    <!-- <div>
      <input type="text" class="form-control"  id="email" placeholder="Email" v-model="form2.email"  />
    </div> -->

         <div  class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Employer <span class="text-danger">*</span></label>
                <input type="text" class="form-control form-control-lg" id="employer"       placeholder="employer"  v-model="form2.employer"      >
            </div>

    <!-- <div>
      <input
        type="text" class="form-control"   id="employer"       placeholder="employer"  v-model="form2.employer" />
    </div> -->

   <div  class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">CNSS <span class="text-danger">*</span></label>
                <input type="text" class="form-control form-control-lg"    id="cnss" placeholder="cnss" v-model="form2.cnss"      >
            </div>
<!-- 
    <div>
      <input
        type="text"
        class="form-control"
        id="cnss" placeholder="cnss" v-model="form2.cnss"
      />
    </div> -->



  <!-- <div  class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">work-address <span class="text-danger">*</span></label>
                <input type="text" class="form-control form-control-lg"    id="work-address" placeholder="Work Address"  v-model="form2.workAddress"   >
            </div> -->
    <!-- <div>
      <input
        type="text"
        class="form-control"
        id="work-address" placeholder="Work Address"  v-model="form2.workAddress"
      />
    </div> -->


  <div  class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">City <span class="text-danger">*</span></label>
                <input type="text" class="form-control form-control-lg"    id="city"  placeholder="City"  v-model="form2.city">
            </div>


             <div class="col-12 form-group text-center">
                <button type="submit" class="btn btn-vue btn-lg col-4">Submit</button>
            </div>
     </div>
    <!-- <div>
      <input
        type="text"
        class="form-control"
        id="city"  placeholder="City"  v-model="form2.city"
      />
    </div> -->

  </form>
</template>

<script>
export default {
  name: "InfosProfessionnelles",
  data() {
    return {
      form2: {
        email: "",
        employer: "",
        cnss: "",
        workAddress: "",
        city: "",
      },
    };
  },
  methods: {
    handelSubmit() {
      localStorage.setItem("form2", JSON.stringify(this.form2));
    },
  },
};
</script>
