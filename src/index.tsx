import React from 'react';
import ReactDOM from 'react-dom/client';
import { overwriteDefaultConfig } from 'choerodon-ui/dataset';
import defaults from 'choerodon-ui/lib/configure/default';

import App from './pages/App';


overwriteDefaultConfig(defaults);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
