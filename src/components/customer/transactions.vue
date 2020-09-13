<template>
    <div class="container pt-5 mt-5">
            <div class="card">
                <div class="card-body">
                    <div class="row">
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
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            credits:null,
            debits:null,
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
        }
    }
}
</script>

<style scoped>

</style>