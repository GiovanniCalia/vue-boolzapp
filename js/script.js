const app = new Vue({
    el: "#root",
    data: {
        newMessage: [
            {
                message: "",
                hour: "",
            }
        ],
        contacts: [
            {
                name: "Michele",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_1.jpg",
                altImage: "avatar 1",
            },
            {
                name: "Fabio",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_2.jpg",
                altImage: "avatar 2",
            },
            {
                name: "Samuele",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_3.jpg",
                altImage: "avatar 3",
            },
            {
                name: "Alessandro B.",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_4.jpg",
                altImage: "avatar 4",
            },
            {
                name: "Alessandro L.",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_5.jpg",
                altImage: "avatar 5",
            },
            {
                name: "Claudia",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_6.jpg",
                altImage: "avatar 6",
            },
            {
                name: "Federico",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_7.jpg",
                altImage: "avatar 7",
            },
            {
                name: "Davide",
                lastMessage: "Ultimo messaggio inviato",
                hour: luxon.DateTime.now().toFormat("hh/mm"),
                image: "img/avatar_8.jpg",
                altImage: "avatar 8",
            },
        ],
        textMessage: [
            {
                message: "",
                hour: "",
            }

        ],
        messageFriend: [
            {
                message: "",
                hour: "",
            }
        ],
    },
    methods:{
        addMessage(){
            if (this.newMessage.message != ""){
                let getTime = luxon.DateTime.now().toLocaleString();
                console.log(getTime)
                this.textMessage.push({...this.newMessage});
                this.newMessage.message = "";
            }
        }, 
    },
})
