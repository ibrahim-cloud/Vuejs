

<template>
 <form  id="signup-form" @submit.prevent="handelSubmit">
  <!-- <form @submit.prevent="handelSubmit"> -->
       <div class="row">
         <div  class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Full Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control form-control-lg"  id="name" v-model="form1.name" placeholder="Nom Complet "     >
            </div>
    <!-- <div>
      <input type="text" id="name" v-model="form1.name" placeholder="Nom Complet " />
    </div> -->

       <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Phone <span class="text-danger">*</span></label>
               <input type="number" class="form-control form-control-lg" id="phone" v-model="form1.phone" placeholder="Phone">
            </div>

    <!-- <div>
      <input type="text" id="phone" v-model="form1.phone" placeholder="Phone" />
    </div> -->

     <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Cin <span class="text-danger">*</span></label>
               <input type="text" class="form-control form-control-lg" id="cin" v-model="form1.cin" placeholder="CIN">
            </div>

    <!-- <div >
      <input
        type="text" class="form-control" id="cin" v-model="form1.cin" placeholder="CIN" />
    </div> -->

  <!-- <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">photo <span class="text-danger">*</span></label>
               <input type="text" class="form-control form-control-lg" id="image" v-model="form1.image" placeholder="Image">
            </div> -->

    <!-- <div class="form-group">
      <input type="text" id="image" v-model="form1.image" placeholder="Image"
      />
    </div> -->


 <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">adresse <span class="text-danger">*</span></label>
               <input type="text" class="form-control form-control-lg"  id="adresse" v-model="form1.address"  placeholder="Address" >
            </div>
    <!-- <div >
      <input
        type="text" id="adresse" v-model="form1.address"  placeholder="Address"  />
    </div> -->


 <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">City <span class="text-danger">*</span></label>
               <input type="text" class="form-control form-control-lg"   id="city"     v-model="form1.city"  placeholder="City" >
            </div>
    <!-- <div >
      <input
        type="text"      id="city"     v-model="form1.city"  placeholder="City"
      />
    </div> -->
 <div class="col-12 form-group text-center">
                <button type="submit" class="btn btn-vue btn-lg col-4">Submit</button>
            </div>
    <!-- <button type="submit" class="btn" >Submit</button> -->
       </div>
  </form>
</template>

<script>
export default {
  name: "InfosPersonnelles",
  data() {
    return {

      form1: {

      name: "",
      phone: "",
      cin: "",
      image: "",
      address: "",
      city: "",

      }

     
    };
  },
  methods : {
    handelSubmit(){
       localStorage.setItem('form1',JSON.stringify(this.form1));
       redirect('/InfosProfessionnelles')
    
      //  window.location.href ('http://localhost:8080/InfosProfessionnelles')
    }
  }
};
</script>
<style>
.btn-vue{
    background: #53B985;
    color: #31485D;
    font-weight: bold;
}
</style>
