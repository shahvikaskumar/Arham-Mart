// Function to validate the feedback form
function validate_feedback_form(event) {
    // Retrieving form elements by name
    var cname = event.target.elements["name"];   
    var reason = event.target.elements["reason"];
    var message=event.target.elements["message"];
    
    // Checking if customer name is empty
    if(cname.value==="")
    {
        alert("Please Enter the Customer Name.");
        cname.focus();
        event.preventDefault();          
    }
    // Checking if reason for feedback is empty
    else if(reason.value==="")
    {
        alert("Please Enter the reason for Feedback.");    
        reason.focus();
        event.preventDefault();        
    }
    // Checking if feedback message is empty
    else if(message.value==="")
    {
        alert("Please Enter the Feedback Message.");
        message.focus();
        event.preventDefault();        
    }
    // If all fields are filled, feedback is submitted successfully
    else{
        alert("Your Feedback is submitted successfully.");
        event.target.reset();
    }    
}

// Function to validate the seller registration form
function validate_seller_form(event) {
    // Retrieving form elements by name
    var sname = event.target.elements["name"];   
    var phoneno = event.target.elements["phoneno"];
    var address=event.target.elements["address"];
    var numericRegex = /^[0-9]+$/;

    // Retrieving form elements by name
    if(sname.value==="")
    {
        alert("Please Enter the Seller Name.");
        sname.focus();
        event.preventDefault();          
    }
    // Checking if phone number is empty
    else if(phoneno.value==="")
    {
        alert("Please Enter the Phone No.");
        phoneno.focus();    
        event.preventDefault();        
    }
    // Checking if phone number contains only digits
    else if (!numericRegex.test(phoneno.value)) {
        alert("Phone number should contain only digits.");
        phoneno.value="";
        phoneno.focus();
        event.preventDefault();
    }
    // Checking if phone number length is 10 digits
    else if(phoneno.value.length !==10)
    {
        alert("Phone number should be 10 digits long.");
        phoneno.focus();
        event.preventDefault();
    }
    // Checking if address is empty    
    else if(address.value==="")
    {
        alert("Please Enter the address.");
        address.focus();
        event.preventDefault();        
    }
    // If all fields are filled, seller registration is successful
    else{
        alert("Your are registerd as seller.");
        event.target.reset();
    }    
}

function activemenu()
{
    const links=document.querySelectorAll('a');
    links.forEach(link =>{
        link.addEventListener('click',function(event){
            links.forEach(link => {
                link.classList.remove('active');                
            });
            link.classList.add('active');                            
        });
    });
}

document.addEventListener('DOMContentLoaded',activemenu);
