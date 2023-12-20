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
            searchContact: "",
            contacts: [
                {
                    name: 'Papà',
                    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ci sei per cena?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma arrivo tardi perché mi fermo a fare aperitivo fuori con gli altri',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Va bene, a dopo',
                            status: 'sent'
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
                            message: 'Bene, tu? Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Sii vengo da te che giochiamo alla play!!',
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
                            message: 'Cenetta da me stasera?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sisi, prendiamo la pizza?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Yesss',
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
                            message: 'Riesci a fare il pranzo oggi?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preparo una semplice pasta',
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
                            message: "L'esame è andato bene?",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:52:00',
                            message: "🙃",
                            status: 'received'
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
                            message: 'Ci sei stasera per guardarci la nostra serie?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ovvio',
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
            
            if(this.newMessage.message.length > 0 && this.newMessage.message.trim().length > 0){
                activeContact.messages.push({...this.newMessage});
                this.newMessage.message = "";
                this.scrollChat();

                // nuovo messaggio dopo 1 secondo
                setTimeout(() => {
                    activeContact.messages.push({...this.newResponse});
                    this.scrollChat();
                }, 1000);
            }
            // trim() rimuove gli spazi iniziali e finali dalla stringa. 
            
        },
        searchNames(){
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchContact.toLowerCase()));
            
            // prima estraggo tutti i nomi, poi li filtro in base a cosa scrivo nell'input (toLowerCase cerca anche se minuscole)
        },
        deleteMessage(index){
            this.contacts[this.activeContact].messages.splice(index, 1);
        },
        goToChatFiltered(contact){
            // devo trovare l'indice del contatto nella lista completa dei contatti attraverso il suo nome
            const indexInContactsArray = this.contacts.findIndex(c => c.name === contact.name);

            // se l'indice è stato trovato nella lista completa dei contatti
            if (indexInContactsArray !== -1) {
                // imposto activeContact uguale all'indice del contatto trovato
                this.activeContact = indexInContactsArray;
            } else {
                // se l'indice non è stato trovato imposto activeContact a 0
                this.activeContact = 0;
            }
        
            // findIndex è un metodo che viene utilizzato per cercare all'interno di un array un elemento e ne restituisce l'indice di ciò che soddisfa la condizione di ricerca. Se nessun elemento soddisfa la condizione, restituisce -1.
        },
        deleteChatMessages(index){
            this.contacts[index].messages = [];
        },
        deleteChat(contact){
            // ricavo l'indice del contatto nell'array dei contatti
            const indiceListaContatto = this.contacts.findIndex(c => c === contact);
            // controllo se l'indice del contatto è valido
            if (indiceListaContatto !== -1) {
                // rimuovo il contatto dall'array
                this.contacts.splice(indiceListaContatto, 1);


                if (this.contacts.length === 0) {
                    // se non ci sono più contatti activeContact = 0
                    this.activeContact = 0;
                } else if (this.activeContact >= this.contacts.length) {
                    // altrimenti aggiorno activeContact all'ultimo indice
                    this.activeContact = this.contacts.length - 1;
                }
            }
        },
        scrollChat(){
            this.$nextTick(() => {
                const chatContainer = document.querySelector('.main-chat-section');
                if (chatContainer) {
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                }
            });
        }
    },
    mounted(){

    }
}).mount("#app")