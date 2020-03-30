import React from 'react'
import { Link } from 'react-router-dom'

import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Join.scss'

class Join extends React.Component {
  static defaultProps = {
    formId: "1561498",
    formCode: "m3g0e6"
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f';
    this.div.appendChild(script);
  }

  render() {
    const { formId, formCode } = this.props
    const action = `https://app.mailerlite.com/webforms/submit/${formCode}`

    return (
      <Container className="Join bg-steal-dark" fluid>
        <Edge className="Edge-header">
          <div className="Edge-start bg-dark" />
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start">
                <div className="Icon-wrap">
                  <Icon name="join" fill="none" viewBox="0 0 56 52" size="52" />
                  <div className="Icon-label color-white">Join Us</div>
                </div>
              </div>
              <div className="Edge-content-end" />
            </div>
          </Container>
        </Edge>

        <Container>
          <div className="Join-form-wrap" ref={e => (this.div = e)}>

            <div id={`mlb2-${formId}`} className={`ml-subscribe-form ml-subscribe-form-${formId}`}>
              <form className="Join-form" action={action} data-code={formCode} method="post" target="_blank">
                <input type="text" className="form-control" name="fields[name]" placeholder="Name" required />
                <input type="email" className="form-control" name="fields[email]" placeholder="Email" required />
                <input type="hidden" name="ml-submit" value="1" />

                <label className="Join-checkbox-wrap">
                  <input type="checkbox" className="Join-checkbox" required />
                  <span className="Join-checkbox-description" >
                    By signing up, you agree to Horizontal Systems <Link to="/privacy">Privacy Policy</Link>
                  </span>
                </label>

                <div className="Join-action">
                  <button type="submit" className="btn primary">Join</button>
                  <button type="button" className="btn loading" disabled="disabled">Join</button>
                </div>

                <div className="Join-links">
                  <div className="Join-link"><Icon name="mail" viewBox="0 0 18 18" /> Email</div>
                  <div className="Join-link"><Icon name="telegram" viewBox="0 0 20 17" /> Live Chat</div>
                  <div className="Join-link"><Icon name="github" viewBox="0 0 22 21" stroke="#fff" /> Github</div>
                </div>
              </form>

              <div className="Join-success">
                <h4>Thank you!</h4>
                <p>Done! Check your email.</p>
              </div>
            </div>

          </div>
        </Container>

        <Edge className="Edge-bottom">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start" />
              <div className="Edge-content-end">
                <div className="Edge-pagination color-white-50">07 / 07</div>
                <div className="Edge-pagination-icon" onClick={() => events.navigate(1)}>
                  <Icon className="arrow-up" name="arrow-down" viewBox="0 0 28 28" fill="none" />
                </div>
              </div>
            </div>
          </Container>

          <div className="Edge-end bg-dark" />
        </Edge>
      </Container>
    )
  }
}

export default Join
