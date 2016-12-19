<template>
    <div>
        <p>id : {{ id }}</p>
        <notification v-for="notification in this.state.notifications">
            <template slot="title">{{ notification.payload.title }}</template>
            {{ notification.payload.body }}
        </notification>
    </div>
</template>

<script>
import firebase from 'firebase';
import Vuex from 'vuex';
import store from './NotificationsStore';
import Notification from './Notification.vue';

export default {
    components: { Notification },
    store,

    data () {
        return {
            state: store.state,
            id: ''
        }
    },

    computed: {
        ...Vuex.mapGetters(['notifications'])
    },
    
    created () {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyArEaIk3iFNYQbB9u0eW_UVPB5GMaz1aV4",
            authDomain: "amp-pwa-vue.firebaseapp.com",
            databaseURL: "https://amp-pwa-vue.firebaseio.com",
            storageBucket: "amp-pwa-vue.appspot.com",
            messagingSenderId: "583154623608"
        };
        firebase.initializeApp(config);

        const messaging = firebase.messaging();


        messaging.requestPermission()
        .then(() => messaging.getToken())
        .then((token) => this.id = token) // token to send to the server
        .catch(err => console.log('Error occured', err));

        messaging.onMessage(function(data) {
            console.log('onMessage :', data);
            store.commit('ADD_NOTIFICATION', data.notification);
        });
    }
}
</script>

<style>
    

</style>