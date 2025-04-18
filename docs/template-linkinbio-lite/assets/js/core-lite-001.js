/* 
* Version: Version 2.2.0 with Bootstrap v5.3.3
* Author: github.com/TheNocturnalDevGypsy [ Abegail Baustista Torrendon ]
* Template Name: Link in Bio - Lite : Style 1
* GitHub Source: https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates
* License: MIT License - https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/blob/master/LICENSE
*/ 

// For class="linkinbio-link-button" id="shake-button" Shaking Button
document.addEventListener('DOMContentLoaded', function() {
   const button = document.getElementById('shake-button'); // Target by ID

   function shakeButton() {
      button.classList.add('shake');
      setTimeout(() => {
         button.classList.remove('shake');
         setTimeout(shakeButton, 2000); // 3-second gap before next shake
      }, 6000); // Shake duration
   }

   shakeButton(); // Start the shake loop
});