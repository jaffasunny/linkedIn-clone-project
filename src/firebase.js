import firebase from "firebase/";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyD6GsPxAcPeFKkJB3b4TnTy0jvqF4SVuPg",
	authDomain: "linkedin-clone-project-30b13.firebaseapp.com",
	projectId: "linkedin-clone-project-30b13",
	storageBucket: "linkedin-clone-project-30b13.appspot.com",
	messagingSenderId: "605627362948",
	appId: "1:605627362948:web:0cdd28cd3300d388ec5cd1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
