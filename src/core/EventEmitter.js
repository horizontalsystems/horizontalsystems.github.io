import events from 'events'

class EventEmitter extends events {
  showModal = md => this.emit('open-modal', md)
  hideModal = () => this.emit('hide-modal')
}

export default new EventEmitter()
