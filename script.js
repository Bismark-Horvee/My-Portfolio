  












document.getElementById("home").addEventListener("click", function() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("About_mo").addEventListener("click", function() {
    document.getElementById("About_sec").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("services_mo").addEventListener("click", function() {
    document.getElementById("service").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("project_mo").addEventListener("click", function() {
    document.getElementById("About_Me").scrollIntoView({ behavior: "smooth" });
});



document.getElementById("skill_mo").addEventListener("click", function() {
    document.getElementById("skill_sec").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("contact_d").addEventListener("click", function() {
    document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" });
});



document.getElementById("facebook").addEventListener("click", function() {

    window.open("https://www.facebook.com/dogbey.bismarkhorvee" ,"_blank");
    
    });
    document.getElementById("instagram").addEventListener("click", function(){
    
    window.open("https://www.instagram.com/bismarkhorvee?igsh=MWE4ZWpncjN3bnlyaw==","blank");
    
    });
    
    document.getElementById("linkedin").addEventListener("click", function() {
    
        window.open(" https://www.linkedin.com/in/bismarck-horvee" ,"_blank");
        
        });
    
    document.getElementById("github").addEventListener("click", function() {
    
        window.open("https://github.com/Bismark-Horvee" ,"_blank");
       
    });


    document.getElementById("down_btn").addEventListener("click", function() {
        // Replace 'your-cv.pdf' with the actual path to your CV file
        const cvFilePath = "images/BISMARK_CV.pdf";
        const link = document.createElement("a");
        link.href = cvFilePath;
        link.download = "images/BISMARK_CV.pdff"; // This sets the filename when downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

   
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            let isValid = true;

            // Name validation
            let name = document.getElementById("name").value.trim();
            if (name === "") {
                document.getElementById("nameError").textContent = "Name is required.";
                isValid = false;
            } else {
                document.getElementById("nameError").textContent = "";
            }

            // Email validation
            let email = document.getElementById("email").value.trim();
            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (email === "") {
                document.getElementById("emailError").textContent = "Email is required.";
                isValid = false;
            } else if (!email.match(emailPattern)) {
                document.getElementById("emailError").textContent = "Enter a valid email.";
                isValid = false;
            } else {
                document.getElementById("emailError").textContent = "";
            }

            // Message validation
            let message = document.getElementById("textarea").value.trim();
            if (message.length < 10) {
                document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
                isValid = false;
            } else {
                document.getElementById("messageError").textContent = "";
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });










  
  let num = document.getElementById("number");
 let count= 0;
 
 setInterval(() => {
     if (count== 90) {
         clearInterval();
     }
     else {
         count += 1;
         num.innerHTML = count + "%";
     }
 }, 20);

let number = document.getElementById("number_mo");
 let counter = 0;
 
 setInterval(() => {
     if (counter == 75) {
         clearInterval();
     }
     else {
         counter += 1;
         number_mo.innerHTML = counter + "%";
     }
 }, 20);


 let numb = document.getElementById("number_css");
 let count_css = 0;
 
 setInterval(() => {
     if (count_css == 80) {
         clearInterval();
     }
     else {
         count_css+= 1;
         number_css.innerHTML = count_css + "%";
     }
 }, 20);


 
 let number_j = document.getElementById("number_js");
 let count_js = 0;
 
 setInterval(() => {
     if (count_js == 90) {
         clearInterval();
     }
     else {
         count_js+= 1;
         number_js.innerHTML = count_js+ "%";
     }
 }, 20);
