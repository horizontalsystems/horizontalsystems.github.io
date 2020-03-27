import events from 'events'

class EventEmitter extends events {
  navigate = page => this.emit('navigate', page)
}

export default new EventEmitter()
