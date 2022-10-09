import React from 'react';
import ReactDOM from 'react-dom/client';
import { overwriteDefaultConfig } from 'choerodon-ui/dataset';
import defaults from 'choerodon-ui/lib/configure/default';
import { configure } from 'choerodon-ui';

import App from './pages/App';

configure({ modalSectionBorder: false });

overwriteDefaultConfig(defaults);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
