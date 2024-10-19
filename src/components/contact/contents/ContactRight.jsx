import React from 'react'
import emailjs from '@emailjs/browser';
import emailData from "../../../data/contact.json"

function ContactRight() {
  
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm(
          emailData.seviceID,    // Replace with your EmailJS Service ID
          emailData.templateID,   // Replace with your EmailJS Template ID
          e.target,
          emailData.publicKey        // Replace with your EmailJS Public Key (User ID)
        ).then(
          (result) => {
            console.log(result.text);  // Success message
            alert('Message Sent Successfully!');
          },
          (error) => {
            console.log(error.text);  // Error message
            alert('Failed to Send Message. Please try again.');
          }
        );
      
        e.target.reset();  // Reset the form after submission
      };
      
    return (
    <>
       <div className="flex w-full xl:max-w-screen-sm h-full justify-center xl:justify-start items-center">
            <form onSubmit={sendEmail} className="h-96 w-[95%] xl:w-full flex flex-col justify-between">
                <div className="h-[17%] w-full justify-between flex">
                <input name='fname' className="h-full w-[49%] border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 outline-none px-5 text-white" placeholder="First Name" type='text' required autoComplete='on'/>
                <input name='lname' className="h-full w-[49%] border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 outline-none px-5 text-white" placeholder="Last Name" type='text' required autoComplete='on'/>
                </div>
                <input name='email' className="h-[17%] w-full border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 outline-none px-5 text-white" placeholder="Email" type='email' required autoComplete='on'/>
                <textarea name='message' className="h-[34%] w-full border xl:border-2 border-blue-600 rounded-xl bg-black bg-opacity-30 outline-none max-h-[35%] px-5 pt-5 text-white" placeholder="Message" required></textarea>
                <input type='submit' className="h-[17%] w-full bg-blue-600 text-white rounded-xl hover:bg-black hover:bg-opacity-80 hover border:xl:border-2 hover:border-blue-600 transition-colors duration-[0.4s] font-semibold text-md" value={"SEND"}/>
            </form>
            </div>
    </>
    )
}
export default ContactRight