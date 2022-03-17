const app = new Vue({
    el: "#root",
    data: {
        chatIndex: 0,

        newMessage: {
            text: "",
            date: luxon.DateTime.now().toFormat("HH:mm"),
            sent: true,

        },

        contacts: [
            {
                name: "Michele",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_1.jpg",
                altImage: "avatar 1",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Hai portato a spasso il cane?",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ricordati di stendere i panni",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Tutto fatto!",
                        sent: false,
                    }
                ],
            },
            {
                name: "Fabio",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_2.jpg",
                altImage: "avatar 2",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Hai fatto la spesa?",
                        sent: true,
                    },


                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Certamente",
                        sent: false,
                    }
                ],
            },
            {
                name: "Samuele",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_3.jpg",
                altImage: "avatar 3",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ciao!",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Come stai?",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ciao! Tutto bene, te?",
                        sent: false,
                    }
                ],
            },
            {
                name: "Alessandro B.",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_4.jpg",
                altImage: "avatar 4",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Mi porti per piacere una pizza!",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Certamente!",
                        sent: false,
                    }
                ],
            },
            {
                name: "Alessandro L.",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_5.jpg",
                altImage: "avatar 5",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Che giornataccia oggi!",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Non mi riesce l'esercizio",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Uffa!",
                        sent: false,
                    }
                ],
            },
            {
                name: "Claudia",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_6.jpg",
                altImage: "avatar 6",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ho chiamato i miei genitori",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ottimo, stanno bene?",
                        sent: false,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Si si dai stanno benone!",
                        sent: true,
                    },
                ],
            },
            {
                name: "Federico",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_7.jpg",
                altImage: "avatar 7",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ehilà!",
                        sent: true,
                    },


                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ehi!",
                        sent: false,
                    }
                ],
            },
            {
                name: "Davide",
                lastMessage: "Ultimo messaggio inviato",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_8.jpg",
                altImage: "avatar 8",

                messages: [

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ciao",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Ti disturbo?",
                        sent: true,
                    },

                    {
                        date: luxon.DateTime.now().toFormat("HH:mm"),
                        text: "Nono figurati!",
                        sent: false,
                    }
                ],
            },
        ],

        textMessage: {
            text: "",
            hour: "",
        },
    },
    methods:{
        profile(avatar){
            return `img/` + avatar;
        },
        activeChat(i){
            this.chatIndex = i;
        },
        addMessage(){
            const otherMessage = {...this.newMessage}
            const singleMessage = this.contacts[this.chatIndex].messages;
            if (this.newMessage.text != ""){
            singleMessage.push(otherMessage);
            this.newMessage.text = "";
            }
        }
    },
})
