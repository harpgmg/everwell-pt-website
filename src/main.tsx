import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import DryNeedling from './pages/DryNeedling.tsx'
import CuppingTherapy from './pages/CuppingTherapy.tsx'
import ElectricalStimulation from './pages/ElectricalStimulation.tsx'
import MassageTherapy from './pages/MassageTherapy.tsx'
import RunningAnalysis from './pages/RunningAnalysis.tsx'
import CashPay from './pages/CashPay.tsx'
import FAQ from './pages/FAQ.tsx'
import Resources from './pages/Resources.tsx'
import Bio from './pages/Bio.tsx'
import ScrollToTop from './ScrollToTop.tsx'
import './index.css'

// GitHub Pages SPA support - handle redirected URLs
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: '/dry-needling',
    element: (
      <>
        <ScrollToTop />
        <DryNeedling />
      </>
    ),
  },
  {
    path: '/cupping-therapy',
    element: (
      <>
        <ScrollToTop />
        <CuppingTherapy />
      </>
    ),
  },
  {
    path: '/electrical-stimulation',
    element: (
      <>
        <ScrollToTop />
        <ElectricalStimulation />
      </>
    ),
  },
  {
    path: '/massage-therapy',
    element: (
      <>
        <ScrollToTop />
        <MassageTherapy />
      </>
    ),
  },
  {
    path: '/running-analysis',
    element: (
      <>
        <ScrollToTop />
        <RunningAnalysis />
      </>
    ),
  },
  {
    path: '/cash-pay',
    element: (
      <>
        <ScrollToTop />
        <CashPay />
      </>
    ),
  },
  {
    path: '/faq',
    element: (
      <>
        <ScrollToTop />
        <FAQ />
      </>
    ),
  },
  {
    path: '/resources',
    element: (
      <>
        <ScrollToTop />
        <Resources />
      </>
    ),
  },
  {
    path: '/bio',
    element: (
      <>
        <ScrollToTop />
        <Bio />
      </>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)