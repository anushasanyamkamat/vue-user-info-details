<template>
    <div>
        <router-link to="/">Home</router-link>
        <div>
            <input type="number" placeholder="Enter Age" v-model.number="age">

            <template>
                <v-simple-table height="300px">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Address</th>
                        <th class="text-left">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.user_name">
                        <td>{{ user.user_name }}</td>
                        <td>{{ user.user_address }}</td>
                        <td>{{ user.user_age }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </template>
        </div>
        
            
    </div>
</template>

<script>    
import axios from 'axios';
export default {
    name: 'UserInfo',
    data: function(){
        return{
            users:[],
            age:0,
        }
    },
    watch:{
        age: function(num){
           // let vm = this;
              this.test(num);
                
 
        }
    },

    methods:{
        test: function(abc){
            axios.get('http://localhost:3000/users')
            .then((response)=>{
               //let value =30;
               this.users=response.data;
               this.users = this.users.filter(user=> user.user_age <= abc);
               
              // vm.users = vm.users.filter(user=> user.user_age <= value);
   
            });

            
        }
        
    },
    
    mounted() {
       // var vm = this;
        // axios.get('http://localhost:3000/user') 
        this.test(this.age);
        
    }
    
}
</script>

<style>
.bold{
    font-weight: bold;

}

.italics{
    font-style: italic;
}
</style>