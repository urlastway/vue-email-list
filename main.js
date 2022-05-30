const app = new Vue({
    el: "#app",
    data: {
        name:[],
    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // handle success
                this.name.push(response.data.response)
            });
        }
    },
},);