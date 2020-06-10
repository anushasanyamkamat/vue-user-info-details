<template>
    <div>
        <router-link to="/">Home</router-link>
        <div>
            <v-card
                class="mx-auto"
                max-width="344"
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">User Details</div>
                    <v-list-item-title class="headline mb-1">{{uName}}</v-list-item-title>
                    <v-list-item-subtitle>{{uAddress}}</v-list-item-subtitle>
                </v-list-item-content>

                </v-list-item>

            
            </v-card>
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