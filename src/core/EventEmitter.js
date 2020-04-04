import events from 'events'

class EventEmitter extends events {
  showModal = md => this.emit('open-modal', md)
  hideModal = () => this.emit('hide-modal')
  navigate = page => this.emit('navigate', page)
}

export default new EventEmitter()
