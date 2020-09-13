import vue from 'vue'
import Vuex from 'vuex';

vue.use(Vuex);

export const store =  new Vuex.Store({
    state:{
        apis:{
            registerBanker:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/banker/bankerRegistration',
            bankerLogin:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/banker/bankerLogin',
            getCustomersDetails:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/banker/getAllTransactions',
            registerCustomer:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/customer/customerRegistration',
            customerLogin:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/customer/customerLogin',
            getTransactions:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/customer/getTransactions',
            customerTransactions:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/customer/customerTransaction',
            getSingleCustomer:'https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/banker/getTransactions/'            

        },
        isBankerAuth:false,
        isCustomerAuth:false,
        totalAmount:0
    }
})