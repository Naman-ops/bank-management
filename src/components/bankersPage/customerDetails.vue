<template>
    <div>
        <div class="container pt-5 mt-5">
            <div class="card shadow">
                <div class="card-body">
                    <div class="pl-3">
                        <h5 class="row">Customer's Name: {{fullname}}</h5>
                        <h5 class="row">Customer's Email: {{email}}</h5>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-3"><h5>Credit amount</h5></div>
                        <div class="col-md-3"><h5>Credit amount date</h5></div>
                        <div class="col-md-3"><h5>Debit amount</h5></div>
                        <div class="col-md-3"><h5>Debit amount date</h5></div>
                        
                        <div class="col-md-6 pt-3">
                            <div class="row"  v-for="(credit,index) in credits" :key="index">
                                <div class="col-md-6">
                                    
                                    <div class="pl-5">Rs.{{credit.amount}}</div>
                                </div>
                                <div class="col-md-6 ">
                                    <div class="" >{{credit.transactionDate}}</div>
                                </div>
                            </div>
                               
                        </div>

                        <div class="col-md-6 pt-3">
                            <div class="row"  v-for="(debit,index) in debits" :key="index">
                                <div class="col-md-6">
                                    
                                    <div class="pl-5">Rs.{{debit.amount}}</div>
                                </div>
                                <div class="col-md-6 ">
                                    <div class="" >{{debit.transactionDate}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="d-flex justify-content-end pt-5">Total Amount:{{totalCreditAmount - totalDebitAmount}}</h5>
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
              credits:null,
            debits:null,
            totalCreditAmount:0,
            totalDebitAmount:0,
            email:null,
            fullname:null
        }
    },
    mounted(){
        var id = this.$route.params.id
        var val = localStorage.getItem('bankerAuthToken')
        axios.get(this.$store.state.apis.getSingleCustomer+id,{headers:{Authorization:val}}).then(res=>{
            console.log(res)
              this.credits = res.data.credit
            this.debits= res.data.debit
            this.email=res.data.email
            this.fullname=res.data.fullName
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
        }
    }
}
</script>

<style scoped></style>