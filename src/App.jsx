import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import ChatbotWidget from "@/components/techvest/ChatbotWidget"

function App() {
  return (
    <HelmetProvider>
      <Pages />
      <Toaster />
      <ChatbotWidget />
    </HelmetProvider>
  )
}

export default App 