import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout';

import ROUTES from '../constants/routes';
import 'choerodon-ui/dist/choerodon-ui.css';
import 'choerodon-ui/dist/choerodon-ui-pro.css';

const Discovery = React.lazy(() => import('./Discovery'));

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path={ROUTES.ROOT} element={<Discovery />} />
            <Route path={ROUTES.VIDEOS} element={<Discovery />} />
          </Routes>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App;