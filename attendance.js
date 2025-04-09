
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, signOut , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// // 🔥 Firebase Config (Replace with your Firebase keys)
// const firebaseConfig = {
//     apiKey: "AIzaSyCYRmfnq_JnrcdxhP4xrWMu5mMdb6fQjAo",
//     authDomain: "islam-app-6bb2e.firebaseapp.com",
//     projectId: "islam-app-6bb2e",
//     storageBucket: "islam-app-6bb2e.firebasestorage.app",
//     messagingSenderId: "74748834935",
//     appId: "1:74748834935:web:0bd586c92ad0fa6c540272",
//     measurementId: "G-L7ZDP3NWBE"
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// // 🚨 Page Access Control
// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//         // 🔴 If not logged in, redirect to login page
//         window.location.href = "index.html";
//     }
// });


// // document.getElementById('logout-btn').addEventListener('click', function () {
// //     auth.signOut().then(() => {
// //       alert('آپ کامیابی سے لاگ آؤٹ ہو چکے ہیں!');
// //       // Redirect to login page or home page
// //       window.location.href = "login.html"; // ya koi aur page
// //     }).catch((error) => {
// //       console.error('لاگ آؤٹ میں مسئلہ:', error);
// //     });
// //   });
// let logoutBtn = document.getElementById('logout-btn');
// logoutBtn.addEventListener('click', function () {
//     auth.signOut().then(() => {
//         alert('آپ کامیابی سے لاگ آؤٹ ہو چکے ہیں!');
//         // Redirect to login page or home page
//         window.location.href = "index.html"; // ya koi aur page
//     }).catch((error) => {
//         console.error('لاگ آؤٹ میں مسئلہ:', error);
//     });
// });
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Add SweetAlert2 to your HTML file by including this in the <head>:
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

// 🔥 Firebase Config (Replace with your Firebase keys)
const firebaseConfig = {
    apiKey: "AIzaSyCYRmfnq_JnrcdxhP4xrWMu5mMdb6fQjAo",
    authDomain: "islam-app-6bb2e.firebaseapp.com",
    projectId: "islam-app-6bb2e",
    storageBucket: "islam-app-6bb2e.firebasestorage.app",
    messagingSenderId: "74748834935",
    appId: "1:74748834935:web:0bd586c92ad0fa6c540272",
    measurementId: "G-L7ZDP3NWBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 🚨 Page Access Control
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // 🔴 If not logged in, redirect to login page
        window.location.href = "index.html";
    }
});

let logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function () {
    signOut(auth)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'لاگ آؤٹ کامیاب!',
                text: 'آپ کامیابی سے لاگ آؤٹ ہو چکے ہیں!',
                confirmButtonColor: '#8e2de2',
                timer: 1500,
                timerProgressBar: true,
            }).then(() => {
                // Redirect to login page or home page
                window.location.href = "index.html";
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'لاگ آؤٹ ناکام',
                text: 'لاگ آؤٹ میں مسئلہ: ' + error.message,
                confirmButtonColor: '#8e2de2',
            });
            console.error('لاگ آؤٹ میں مسئلہ:', error);
        });
});