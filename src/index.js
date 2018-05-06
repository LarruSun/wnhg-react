import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouters from './router/router';
import registerServiceWorker from './registerServiceWorker';

import 'react-flexible';

ReactDOM.render(
    <div>
        <AppRouters/>
    </div>
    ,document.getElementById('root'));
registerServiceWorker();
