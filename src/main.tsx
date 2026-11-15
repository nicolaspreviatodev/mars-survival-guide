import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Layout } from './components/Layout'
import { CentroMissao } from './pages/CentroMissao'
import { Sobrevivencia } from './pages/Sobrevivencia'
import { Protocolos } from './pages/Protocolos'
import { ProtocoloDetalhe } from './pages/ProtocoloDetalhe'
import { Mapa } from './pages/Mapa'
import { Rotas } from './pages/Rotas'
import { Simulador } from './pages/Simulador'
import { ChecklistEva } from './pages/ChecklistEva'
import { Equipamentos } from './pages/Equipamentos'
import { SistemasVitais } from './pages/SistemasVitais'
import { Decisoes } from './pages/Decisoes'
import { Manual } from './pages/Manual'
import { idioma } from './lib/i18n'

// Declara o idioma na raiz para leitores de tela e para o navegador.
document.documentElement.lang = idioma() === 'pt' ? 'pt-BR' : 'en'

// No GitHub Pages o site vive em /<repositorio>/. O basename faz o router
// trabalhar relativo a essa subpasta, sem quebrar os links internos.
const base = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <CentroMissao /> },
      { path: 'sobrevivencia', element: <Sobrevivencia /> },
      { path: 'protocolos', element: <Protocolos /> },
      { path: 'protocolos/:id', element: <ProtocoloDetalhe /> },
      { path: 'mapa', element: <Mapa /> },
      { path: 'rotas', element: <Rotas /> },
      { path: 'simulador', element: <Simulador /> },
      { path: 'eva', element: <ChecklistEva /> },
      { path: 'equipamentos', element: <Equipamentos /> },
      { path: 'sistemas', element: <SistemasVitais /> },
      { path: 'decisoes', element: <Decisoes /> },
      { path: 'manual', element: <Manual /> },
    ],
  },
], { basename: base })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
