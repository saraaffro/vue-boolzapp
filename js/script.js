const {createApp} = Vue;

function dataOdierna(){
    const adesso = new Date();

    // padStart aggiunge una cifra se voglio es.(7/11 diventa 07/11)
    const giorno = adesso.getDate().toString().padStart(2, '0');
    const mese = (adesso.getMonth() + 1).toString().padStart(2, '0');
    const anno = adesso.getFullYear();

    const ora = adesso.getHours().toString().padStart(2, '0');
    const minuti = adesso.getMinutes().toString().padStart(2, '0');
    const secondi = adesso.getSeconds().toString().padStart(2, '0'); 

    return `${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
}

createApp({
    data(){
        return{
            activeContact: 0,
            newMessage: {
                date: dataOdierna(),
                message: "",
                status: "sent"
            },
            newResponse: {
                date: dataOdierna(),
                message: "Ok",
                status: "received"
            },
            contacts: [
                {
                    name: 'Papà',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Natti',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-1024.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Matteo',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-256.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Laura',
                    avatar: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914838/woman-icon-md.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Milena',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-1024.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Milena, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Enrico',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Mamma',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-256.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods:{
        goToChat(i){
            this.activeContact = i;
        },
        showNewMessage(){
            this.newMessage.date = dataOdierna();

            const activeContact = this.contacts[this.activeContact];
            activeContact.messages.push({...this.newMessage});
            this.newMessage.message = "";

            // nuovo messaggio dopo 1 secondo
            setTimeout(() => {
                activeContact.messages.push({...this.newResponse});
            }, 1000);
        },
    },
    mounted(){

    }
}).mount("#app")