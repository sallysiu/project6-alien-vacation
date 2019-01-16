import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCYR0IpN0Z3NryJyBc5656t3Rs6kEnv81A",
	authDomain: "intergalatic-visitors-system.firebaseapp.com",
	databaseURL: "https://intergalatic-visitors-system.firebaseio.com",
	projectId: "intergalatic-visitors-system",
	storageBucket: "intergalatic-visitors-system.appspot.com",
	messagingSenderId: "486297608332"
};
firebase.initializeApp(config);

export default firebase;