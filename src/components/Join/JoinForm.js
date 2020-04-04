import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'

import './JoinForm.scss'

class JoinForm extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f';
    this.div.appendChild(script);
  }

  render() {
    const formId = "1561498"
    const formCode = "m3g0e6"
    const action = `https://app.mailerlite.com/webforms/submit/${formCode}`

    return (
      <div id={`mlb2-${formId}`} className={`ml-subscribe-form ml-subscribe-form-${formId}`} ref={e => (this.div = e)}>
        <form className="Join-form" action={action} data-code={formCode} method="post">
          <input type="text" className="form-control" name="fields[name]" placeholder="Name" required />
          <input type="email" className="form-control" name="fields[email]" placeholder="Email" required />
          <input type="hidden" name="ml-submit" value="1" />

          <label className="Join-checkbox-wrap">
            <input type="checkbox" className="Join-checkbox" required />
            <span className="Join-checkbox-description">
            By signing up, you agree to Horizontal Systems <Link to="/privacy">Privacy Policy</Link>
          </span>
          </label>

          <div className="Join-action">
            <button type="submit" className="btn primary">Join</button>
            <button type="button" className="btn loading" disabled="disabled">Join</button>
          </div>

          <div className="Join-links">
            <a href="mailto:hsdao@protonmail.ch">
              <div className="Join-link">
                <Icon name="mail" viewBox="0 0 18 18" /> Email
              </div>
            </a>
            <a href="https://t.me/unstoppable_wallet">
              <div className="Join-link">
                <Icon name="telegram" viewBox="0 0 20 17" /> Live Chat
              </div>
            </a>
            <a href="https://github.com/horizontalsystems">
              <div className="Join-link">
                <Icon name="github" viewBox="0 0 22 21" stroke="#fff" /> Github
              </div>
            </a>
          </div>
        </form>

        <div className="Join-success">
          <h4>Thank you!</h4>
          <p>Done! Check your email.</p>
        </div>
      </div>
    )
  }
}

export default JoinForm
