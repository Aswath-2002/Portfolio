//  ===================================
// import { useState } from 'react';
//     Skills Progress Animation
//     ===================================
    function animateSkillBars() {
        const skillProgress = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const targetWidth = progress.getAttribute('data-progress');
                    
                    // Animate progress bar
                    setTimeout(() => {
                        progress.style.width = targetWidth + '%';
                    }, 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        skillProgress.forEach(progress => {
            observer.observe(progress);
        });
    }
    
    animateSkillBars();








    


// Git hub Button =======================
    
console.log(window.location);


    function git(){
           
          window.location.href = "https://github.com/Aswath-2002";
          
    }

  
// LinkedIn Button ========================


  function linkedin(){
           
          window.location.href = "https://www.linkedin.com/in/aswathj/";
         
          
    }
    



// Twitter Button ========================


  function twitter(){
           
          window.location.href = "";
         
          
    }    


// Mail Button ========================


  function mail(){
           
          window.location.href = "mailto:aswath102002@gmail.com";
         
          
    }  



    // Home Button ========================


  function home_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#home";
         
          
    }  


     // About Button ========================


  function about_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#about";
         
          
    }  



       // Skills Button ========================


  function skills_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#skills";
         
          
    }  


    
       // Education Button ========================


  function education_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#education";
         
          
    }  




     
       // Projects Button ========================


  function projects_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#project";
         
          
    }  


         // Contact Button ========================


  function contact_bt(){
           
          window.location.href = "file:///C:/Frontend/Portfolio/index.html#contact";
         
          
    }  




    // Download Resume -====================

    function download_resume(){

          window.location.href="./Aswath_Resume.pdf";
          
    }


   


































 








    