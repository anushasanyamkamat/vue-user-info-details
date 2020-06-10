<template>
    <div>
        <router-link to="/">Home</router-link>
        <hr>
        <div align="center">
            <table border="5px">
                <thead class="bold">
                    <tr>
                        <th>Name</th><br>
                        <th>Age</th><br>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody class="italics">
                    <tr>
                        <td>{{uName}}</td> <br>
                        <td>{{uAge}}</td><br>
                        <td>{{uAddress}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
            
    </div>
</template>

<script>    
import axios from 'axios';
export default {
    name: 'UserInfo',
    data: function(){
        return{
            uName:'',
            uAge: '',
            uAddress: ''
        }
    },
    mounted() {
        //var vm = this;
        // axios.get('http://localhost:3000/user') 
        axios.get('http://localhost:3000/user')
            .then((response)=>{
            this.uName = response.data.user_name;
            this.uAge = response.data.user_age;
            this.uAddress = response.data.user_address;
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