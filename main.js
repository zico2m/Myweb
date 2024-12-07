
let showHiddenPass = (loginPass, loginEye) =>{
   let input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      if(input.type === 'password'){
         // Switch to text
         input.type = 'text'

         // Icon change
         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else{
         // Change to password
         input.type = 'password'

         // Icon change
         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}

showHiddenPass('login-pass','login-eye');



document.getElementById('login').addEventListener('submit',function(event){
   event.preventDefault();

   var email=document.getElementById('login-email').value;
   var pasoed=document.getElementById('login-pass').value;
   var idimage=document.getElementById('idimage').files[0];

   if(email==='zico2001s@yahoo.com' && pasoed==='zico7385'){

      if(idimage){
         FileReader;
         window.location.href="profai;.html";

      }else{
         alert('photo');
      };
       
       
   }else{
       alert('Try again');
   }

});






