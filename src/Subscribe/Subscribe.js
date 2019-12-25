import React, { Component } from 'react'
import './Subscribe.scss'

class Subscribe extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f";
    this.div.appendChild(script);
  }

  render() {
    return (
      <div id="mlb2-1561498" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1561498" ref={e => (this.div = e)}>
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent">
                <h4>Keep abreast of new Guides</h4>
              </div>
              <form className="ml-block-form" action="https://app.mailerlite.com/webforms/submit/m3g0e6" data-code="m3g0e6" method="post" target="_blank">
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ">
                    <div className="ml-field-group ml-field-name ml-validate-required">
                      <input type="text" className="form-control" name="fields[name]" placeholder="Name" />
                    </div>
                  </div>
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input type="email" className="form-control" name="fields[email]" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="ml-form-checkboxRow ml-validate-required">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="label-description">
                      By signing up, you agree to Horizontal System's <a href="/privacy">Privacy Policy</a>
                    </div>
                  </label>
                </div>

                <input type="hidden" name="ml-submit" value="1" />
                <div className="ml-form-embedSubmit">
                  <button type="submit" className="btn">Send Me Guides!</button>
                  <button disabled="disabled" style={{ display: 'none' }} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad" />
                  </button>
                </div>
              </form>
            </div>
            <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>Please check your email for the download links.</p>
              </div>
            </div>
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{ __html:
            `function ml_webform_success_1561498() {
              var $ = ml_jQuery || jQuery;
              $('.ml-subscribe-form-1561498 .row-success').show();
              $('.ml-subscribe-form-1561498 .row-form').hide();
            }`
          }}
        />
        <script src="https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f" />
      </div>
    )
  }
}

export default Subscribe
