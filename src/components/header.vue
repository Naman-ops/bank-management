<template>
    <nav class="navbar navbar-expand-lg navbar-light text-white bg-light">
  <a class="navbar-brand" href="#"><img src="../assets/logo.png" height="50px" width="50px"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav row w-100">
      
      <li class="nav-item col-md-3 text-dark ">
        <span >Bank Management System</span>
      </li>
      <li class="nav-item col-md-9 text-dark ">
        <div class="row w-100 d-flex justify-content-end text-white">
            <div class="col-md-7  d-flex justify-content-end text-white">
           <div class=""><button class="btn btn-primary" v-if="!$store.state.isCustomerAuth && !$store.state.isBankerAuth " @click="showForm('app-customerAuth')">Customer Registeration</button></div>
            <div class="pl-2"><button  class="btn btn-primary" v-if="!$store.state.isCustomerAuth && !$store.state.isBankerAuth" @click="showForm('app-bankerAuth')">Banker Registeration</button></div>

           <div class=""><button class="btn btn-primary" v-if="$store.state.isCustomerAuth" @click="deposite">Deposite Amount</button></div>
            <div class="pl-2"><button  class="btn btn-primary" v-if="$store.state.isCustomerAuth" @click="withdraw">Withdraw Amount</button></div>

            <div class=""><button class="btn btn-primary" v-if="$store.state.isBankerAuth" @click="allCustomersDetails">All Customers Details</button></div>
            
            <div class="pl-2"><button  class="btn btn-secondary" v-if="$store.state.isBankerAuth || $store.state.isCustomerAuth" @click="logout">Logout</button></div>
            </div>
 
        </div>
      </li>
     
    </ul>
  </div>
</nav>
</template>

<script>
    import {bus} from '../main.js'
    export default {
        methods:{
            showForm(val){
                bus.$emit('showForm',val)
            },

            deposite(){
              this.$router.push('/deposite')
            },
            withdraw(){
              this.$router.push('/withdraw')
            },

            allCustomersDetails(){
              this.$router.push('/customers_details')
            },
            customerDetails(){
              this.$router.push('/single_customers_details')
            },
            logout(){
              if(this.$store.state.isBankerAuth){
              localStorage.removeItem("bankerAuthToken");
              this.$router.push('/')
              }
              else{
                localStorage.removeItem("customerAuthToken");
                this.$router.push('/')
              }
            }
        }
    }
</script>

<style scoped></style>