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


   if (validate_email(email) == false || validate_password(password) == false) {
      return

   auth.createUserWithEmailAndPassword(email, password)
   .then(function() {
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
         email : email
         password : password
         last-login : Date.now()
      }

      database_ref.child('users/' + user.uid).set(user_data)
      alert('User Created!)
   })
   .catch(function(error) {
      var error_code = error.code
      var error_message =  error.message

      alert(error_message)
   })

function validate_email(email) {
   expression = /^[^@]+@\w+(\.\w+)+\w$/
   if (expression.test(email)==true) {
      return true
   } else{
      return false
   }
}

function validate_password(password) {
   if (password < 6) {
      return false
   }  else {
      return true
   }
}

function validate_field(field) {
   if (field == null) {
      return false
   }

   if (field.length <= 0) {
      return false
   }  else {
      return true
   }
}
      

