import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs
           .sendForm('service_45nvs3m',
            'template_u6yfpq3',
             form.current,
              'qupMiJMZy7qFP2m7C')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

  return (
    <div className="content-contact">
        <section>
            <div className='cad'>
                <h2>Contact us</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Full name ' required />
                    <input type="email" placeholder='User_email ' required />
                    <input type="text" placeholder='Subjet' name='subjet' required />

                    <textarea name="message"  cols="30" rows="10">

                    </textarea>
                    <button type='submit' className='bt'>Send Message</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact