import React, { Fragment } from 'react';
export default function ContactForm() {
  return (
    <Fragment>
      <header>
        <h2>Say Hello</h2>
      </header>
      <div className="content">
        <p>
          <strong>I'm all ears.</strong> Please feel free to reach out if you
          have any questions, opportunities, inquiries or comment about what I
          do or how I can help you!
        </p>
        <form>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </Fragment>
  );
}
