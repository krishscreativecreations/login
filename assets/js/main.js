/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
   const input = document.getElementById(inputPass),
         iconEye = document.getElementById(inputIcon)
         
   iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
           // Switch to text
           input.type = 'text'

           // Add icon
           iconEye.classList.add('ri-eye-line')
           // Remove icon
           iconEye.classList.remove('ri-eye-off-line')
       }else{
           // Change to password
           input.type = 'password'

           // Remove icon
           iconEye.classList.remove('ri-eye-line')
           // Add icon
           iconEye.classList.add('ri-eye-off-line')
       }
   })
}

showHiddenPass('input-pass','input-icon')

const firebaseConfig = {
    apiKey: "AIzaSyAoHWrXDD_hPUuAqWj9pPDKVJssGkKSmZc",
    authDomain: "login-and-register-dd3d7.firebaseapp.com",
    projectId: "login-and-register-dd3d7",
    storageBucket: "login-and-register-dd3d7.appspot.com",
    messagingSenderId: "105380364170",
    appId: "1:105380364170:web:37d0d626d1a029da7a9273",
    measurementId: "G-RRKCYLW5ZY"
};
const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function register(){
   email = document.getElementById('input-email').value
   password = document.getElementById('input-pass').value

