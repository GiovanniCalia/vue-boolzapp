const app = new Vue({
    el: "#root",
    data: {
        chatIndex: 0,
        contacts: [
            {
                name: "Michele",
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_1.jpg",
                altImage: "avatar 1",
                indexMessage: "",
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
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_2.jpg",
                altImage: "avatar 2",
                indexMessage: "",

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
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_3.jpg",
                altImage: "avatar 3",
                indexMessage: "",

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
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_4.jpg",
                altImage: "avatar 4",
                indexMessage: "",

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
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_5.jpg",
                altImage: "avatar 5",
                indexMessage: "",

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
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_6.jpg",
                altImage: "avatar 6",
                indexMessage: "",

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
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_7.jpg",
                altImage: "avatar 7",
                indexMessage: "",

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
                data: luxon.DateTime.now().toFormat("HH:mm"),
                image: "avatar_8.jpg",
                altImage: "avatar 8",
                indexMessage: "",

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
    },
    methods:{
        profile(avatar){
            return `img/` + avatar;
        },
        activeChat(i){
            this.chatIndex = i;
        },
        addMessage(){
            const singleMessage = this.contacts[this.chatIndex];
            const newMessage = {
                text: singleMessage.indexMessage,
                date: luxon.DateTime.now().toFormat("HH:mm"),
                sent: true,
            }
            if (singleMessage.indexMessage != ""){
            singleMessage.messages.push(newMessage);
            singleMessage.indexMessage = "";
            }
            this.friendAnswer(this.chatIndex)
        },
        friendAnswer(index){
            setTimeout(() => {
                const singleMessage = this.contacts[index];
                const newMessage = {
                    text: "ok",
                    date: luxon.DateTime.now().toFormat("HH:mm"),
                    sent: false,
                };
                singleMessage.messages.push(newMessage);
            }, 1000) 
        },
    },
})