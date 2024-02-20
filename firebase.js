import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Config copy từ Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAydqGt2q6IpEQFSkqCflJAYjZEUJNt5gQ",
    authDomain: "jsi03-46706.firebaseapp.com",
    projectId: "jsi03-46706",
    storageBucket: "jsi03-46706.appspot.com",
    messagingSenderId: "967629567676",
    appId: "1:967629567676:web:dc6b3d069fed42ec8182b9",
};

// Khởi tạo ứng dụng với config đã cung cấp bên trên
const app = initializeApp(firebaseConfig);
// Khởi tạo auth
const auth = getAuth(app);

export { auth };
