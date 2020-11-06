import React from 'react'

import Container from '../Container/Container'
import events from '../../core/EventEmitter'

import './Modal.scss'

class Modal extends React.Component {
  static propTypes = {}

  state = {
    modal: null
  }

  hideModal = () => {
    this.setState({ modal: null })
    this.detachShortcut()
  }

  openModal = () => {
    const manager = this.manager
    const childes = manager.childNodes

    const modal = childes.length && manager.childNodes[0]
    if (!!modal) {
      modal.style.zIndex = 1001
      modal.style.opacity = 1
      modal.style.display = 'block'
    }
  }

  attacheShortcut = event => {
    if (event.keyCode === 27) {
      this.hideModal()
    }
  }

  detachShortcut = () => {
    window.removeEventListener('keydown', this.attacheShortcut)
  }

  UNSAFE_componentWillMount() {
    events.on('hide-modal', this.hideModal)
    events.on('open-modal', modal => {
      this.setState({ modal }, this.openModal)
      window.addEventListener('keydown', this.attacheShortcut)
    })
  }

  componentWillUnmount() {
    events.removeAllListeners('open-modal')
    events.removeAllListeners('hide-modal')
  }

  render() {
    if (!this.state.modal) return null

    return (
      <div className="modal-container" ref={ref => this.manager = ref}>
        <Container className="modal fadeInUp">
          {/*<span className="close" onClick={this.hideModal}>&times;</span>*/}
          {this.state.modal}
        </Container>
        <div className="lean-overlay" onClick={this.hideModal} />
      </div>
    )
  }
}

export default Modal
