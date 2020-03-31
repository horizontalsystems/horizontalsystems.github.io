import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import Routes from './Routes'
import unregister from './core/serviceWorker'
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(<Routes />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
