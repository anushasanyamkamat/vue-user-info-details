<template>
    <div>
        <router-link to="/">Home</router-link>
        <div>
            <template>
                <v-simple-table height="300px">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.user_name">
                        <td>{{ user.user_name }}</td>
                        <td>{{ user.user_address }}</td>
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
        }
    },
    mounted() {
        //var vm = this;
        // axios.get('http://localhost:3000/user') 

        axios.get('http://localhost:3000/users')
            .then((response)=>{
                console.log(response.data);
                this.users=response.data;
            
        });
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