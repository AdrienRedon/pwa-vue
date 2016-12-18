<template>
    
</template>

<script>
import firebase from 'firebase';
import Vuex from 'vuex';
import store from './NotificationsStore';

export default {
    store,

    data () {
        return {}
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
        .then(function() {
            console.log('Have permission');
            return messaging.getToken();
        })
        .then(function(token) {
            console.log(token); // token to send to the server
        })
        .catch(function(err) {
            console.log('Error occured', err);
        });

        messaging.onMessage(function(payload) {
            console.log('onMessage :', payload);
            store.commit('ADD_NOTIFICATION', payload);
        });
    }
}
</script>

<style>
    

</style>