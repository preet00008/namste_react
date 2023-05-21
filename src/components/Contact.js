const Contact = () =>{

    return(
        <div className="container_contact">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <input className="contact_name"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input className="contact_name"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea className="contact_name"
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
    );

};


export default Contact;