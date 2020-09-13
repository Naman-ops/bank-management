<template>
    <div class="container">
        <table class="table">
  <thead>
    <tr class="row">
      <th scope="col" class="col-md-3">Name</th>
      <th scope="col" class="col-md-4">Email</th>
      <th scope="col" class="col-md-3">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr class="row" v-for="(customer,index) in customers" :key="index">
      <td class="col-md-3">{{customer.fullName}}</td>
      <td class="col-md-4">{{customer.email}}</td>
      <td class="col-md-3"><button class="btn btn-warning" @click="showDetails(customer._id)">Show Details</button></td>
    </tr>
  
    
  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            customers:null
        }
    },
    methods:{
      showDetails(id){
        this.$router.push('/single_customers_details/'+id)
      }
    },
    mounted(){
        var val = localStorage.getItem('bankerAuthToken')
        axios.get(this.$store.state.apis.getCustomersDetails,{headers:{Authorization:val}}).then(res=>{
            console.log(res)
            this.customers=res.data
        })
    }   
}
</script>

<style scoped>

</style>