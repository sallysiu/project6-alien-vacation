import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDiBGMBDU5_0Ci8_ZIXSJv-EqmbC8I1ZvU",
	authDomain: "intergalacticvisitorssystem.firebaseapp.com",
	databaseURL: "https://intergalacticvisitorssystem.firebaseio.com",
	projectId: "intergalacticvisitorssystem",
	storageBucket: "",
	messagingSenderId: "815125820107"
};
firebase.initializeApp(config);

export default firebase;