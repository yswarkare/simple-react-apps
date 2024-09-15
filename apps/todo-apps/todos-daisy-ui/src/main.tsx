import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PageLoader } from "yw-icons"
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import 'daisyui/dist/themes.css'
import 'daisyui/dist/full.css'
import 'daisyui/dist/styled.css'
import 'yw-daisyui/dist/assets/style.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>,
)
