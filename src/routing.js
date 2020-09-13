import authentication from './components/authentication/authentication.vue'
import {store} from './store/store.js'
import customerDetails from './components/bankersPage/showCustomersDetails.vue'
import singleCustomerDetails from './components/bankersPage/customerDetails.vue'
import customerTransactions from './components/customer/transactions.vue'
import deposite from './components/customer/deposite.vue'
import withdraw from './components/customer/withdraw.vue'

export const routes = [
    {path : '' , component:authentication,beforeEnter:(to,from,next)=>{
        var bankerAuth = localStorage.getItem('bankerAuthToken')
        var customerAuth = localStorage.getItem('customerAuthToken')
        if(bankerAuth){
            next('/customers_details')
            store.state.isBankerAuth=true
        }
        else{
            store.state.isBankerAuth=false
            next()
        }

        if(customerAuth){
            next('/customer_trans')
            store.state.isCustomerAuth=true
        }
        else{
            store.state.isCustomerAuth=false
            next()
        }
    } },
    {path:'/customers_details', component:customerDetails,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('bankerAuthToken')
        if(val){
            next()
            store.state.isBankerAuth=true
        }
        else{
            next('/')
            store.state.isBankerAuth=false

        }
    }},
    {path:'/single_customers_details/:id', component:singleCustomerDetails,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('bankerAuthToken')
        if(val){
            next()
            store.state.isBankerAuth=true
        }
        else{
            next('/')
            store.state.isBankerAuth=false

        }
    }},
    {path:'/customer_trans', component:customerTransactions,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('customerAuthToken')
        if(val){
            next()
            store.state.isCustomerAuth=true
        }
        else{
            next('/')
            store.state.isCustomerAuth=false

        }
    }},
    {path:'/deposite', component:deposite,beforeEnter:(to,from,next)=>{
        var val = localStorage.getItem('customerAuthToken')
        if(val){
            next()
            store.state.isCustomerAuth=true
        }
        else{
            next('/')
            store.state.isCustomerAuth=false

        }
    }},
    {
        path:'/withdraw',component:withdraw,beforeEnter:(to,from,next)=>{
            var val = localStorage.getItem('customerAuthToken')
            if(val){
                next()
            store.state.isCustomerAuth=true
            }
            else{
                next('/')
                store.state.isCustomerAuth=false
            }
        }
    }

]