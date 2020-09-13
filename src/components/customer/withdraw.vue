<template>
    <div>
    <a class="offset-md-2 mt-5" @click="$router.push('/customer_trans')">Show All transactions</a>

<div class="container w-25">
    
    <div class="card shadow mt-5">
      <div class="card-body">
          <div class="d-flex justify-content-center"><h3>Withdraw Amount</h3></div>
          <div v-if="showSuccessMessage" class="alert alert-primary" role="alert">
              Withdrawl Successfully
          </div>
            <h5 class="d-flex justify-content-end text-secondary"> Your Balance: Rs. {{$store.state.totalAmount}}</h5>
            <div class="form-group">
             <strong>  <label for="formGroupExampleInput">Enter Amount:</label> </strong>
               <input type="text" class="form-control" v-model="amount"  placeholder=" amount">
               <div class="d-flex justify-content-end pt-3"><button class="btn btn-primary" @click="deposite">Withdraw ammount</button></div>
            </div>
      </div>
    </div>
</div>
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    data(){
        return {
            amount:null,
            showSuccessMessage:false,
            totalCreditAmount:0,
            totalDebitAmount:0
        }
    },
    mounted(){
         var val = localStorage.getItem('customerAuthToken')
        console.log(val)
        axios.get(this.$store.state.apis.getTransactions,{headers:{Authorization:val}}).then(res=>{
            console.log(res)
            this.credits = res.data.credit
            this.debits= res.data.debit
            this.getTotalAmount()

        })
    },
    methods:{
         getTotalAmount(){
            this.credits.forEach(val=>{
                this.totalCreditAmount = this.totalCreditAmount + val.amount
            });
            console.log(this.totalCreditAmount)

            this.debits.forEach(val=>{
                this.totalDebitAmount = this.totalDebitAmount + val.amount
            });
            console.log(this.totalDebitAmount)

            

            this.$store.state.totalAmount=this.totalCreditAmount-this.totalDebitAmount
        },
        deposite(){
        var val = localStorage.getItem('customerAuthToken')
        console.log(typeof(this.amount))
        this.amount = parseInt(this.amount)
        if(this.$store.state.totalAmount >= this.amount){
        console.log(val)
            axios.patch(this.$store.state.apis.customerTransactions,{type:"DEBIT",amount:this.amount},{headers:{Authorization:val}}).then(res=>{
                console.log(res)
                this.showSuccessMessage=true

                setTimeout(()=>{
                    this.showSuccessMessage=false
                    this.$router.push('/customer_trans')
                },1500)
            })
        }
        else{
            alert('No sufficient Fund')
        }
        }
    }
}
</script>

<style scoped>
    a{
        cursor: pointer;
    }
</style>