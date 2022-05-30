const app = new Vue({
    el: "#app",
    data: {
        name: '',
    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
            if(response.data.response === this.name){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    // handle success
                    this.name = response.data.response});
            }
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            // handle success
            this.name = response.data.response
        });
        
    },
},);