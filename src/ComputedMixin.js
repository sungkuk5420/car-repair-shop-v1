
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBozDFmvFQsND73Qm5R0E9vJVSriqKzIxo",
    authDomain: "carrepairshop-f398e.firebaseapp.com",
    databaseURL: "https://carrepairshop-f398e.firebaseio.com",
    projectId: "carrepairshop-f398e",
    storageBucket: "carrepairshop-f398e.appspot.com",
    messagingSenderId: "516814046131",
    appId: "1:516814046131:web:5c5ee7f890be4f255b01c6"
};

import { mapGetters } from "vuex";
let ComputedMixin = {
    data () {
        return {
            db: null,
        }
    },
    mounted () {
        const app = initializeApp(firebaseConfig);
        console.log(app)
        this.db = getFirestore(app);
        console.log("db 취득완료")
    },
    computed: {
        ...mapGetters({
            centerTab: "getCenterTab",
            loginUser: "getLoginUser",
        }),
    }
};
export default ComputedMixin;
