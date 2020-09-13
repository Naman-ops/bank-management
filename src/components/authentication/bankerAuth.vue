<template>
    <div class="d-flex justify-content-center pt-5 mt-5">
        <div class="card w-25">
          <div class="card-body">
            <div class="alert alert-primary" v-if="showErrorMessage" role="alert">
              you are successfully register please login
            </div>
              <h4 class="d-flex justify-content-center" v-if="isLogin">Banker Login </h4>
              <h4 class="d-flex justify-content-center" v-if="!isLogin">Banker Registeration </h4>
              <div class="form-group" v-if="!isLogin">
                <label for="fullname"><strong>Fullname:</strong></label>
                <input type="text" class="form-control" @blur="$v.fullname.$touch()"  v-model="fullname" placeholder="enter full name">
                <p  class=" pt-2 mb-0   text-danger" v-if="!$v.fullname.required">fullname is required</p>
              </div>
            
              <div class="form-group">
                <label for="email"><strong>Email:</strong></label>
                <input type="email" class="form-control" @blur="$v.email.$touch()" v-model="email" placeholder="name@example.com">
                <p  class=" pt-2 mb-0   text-danger" v-if="!$v.email.email">Enter a valid email.</p>
                <p  class=" pt-2 mb-0   text-danger" v-if="!$v.email.required">email is required.</p>
              </div>
              <div class="form-group">
                <label for="password"><strong>Password:</strong></label>
                <input type="password" class="form-control" @blur="$v.password.$touch()" v-model="password" placeholder="enter password">
                <p  class=" pt-2 mb-0   text-danger" v-if="!$v.password.required">Password is required.</p>
                <p  class=" pt-2 mb-0   text-danger" v-if="!$v.password.minLength">password must have minimum 6 characters</p>

              </div>
            <div class="d-flex justify-content-end text-primary change_status" v-if="!isLogin" @click="changeStatus">Have an account ?</div>
            <div class="d-flex justify-content-end text-primary change_status" v-if="isLogin" @click="changeStatus">Create Account</div>
              <div class="d-flex justify-content-end pt-3" v-if="!isLogin"  @click="submit()"><button class="btn btn-primary" :disabled="$v.$invalid">Register</button></div>
              <div class="d-flex justify-content-end pt-3" v-if="isLogin"  @click="submit()"><button class="btn btn-primary" :disabled="$v.$invalid">Login</button></div>
          </div>
        </div>
    </div>    
</template>

<script>
import {required, minLength, email} from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
    data(){
        return {
            email:null,
            fullname:null,
            password:null,
            isLogin:false,
            showErrorMessage:false
        }
    },
    validations:{
      fullname:{required},
      password:{required,
        minLength:minLength(6)
      },
      email:{required,email}
    },
    mounted(){
     
    },
    methods:{
      changeStatus(){
        this.isLogin = !this.isLogin
         if(this.isLogin){
        this.fullname="qwe"
      }
      else{
        this.fullname=null
      }
      console.log(this.fullname)
      },
        submit(){
          if(!this.isLogin){
            console.log("register")
            axios.post(this.$store.state.apis.registerBanker,{fullName:this.fullname,email:this.email,password:this.password}).then(res=>{
              console.log(res)
              this.showErrorMessage=true
              this.isLogin=true
            })
          }
          else{
            console.log("Login")
             axios.post(this.$store.state.apis.bankerLogin,{email:this.email,password:this.password}).then(res=>{
              console.log(res)
              localStorage.setItem("bankerAuthToken",res.data.token)
              this.$router.push('/customers_details')
            })
          }
        }
    }
}
</script>

<style scoped>
  .change_status{
    cursor: pointer;
  }
</style>