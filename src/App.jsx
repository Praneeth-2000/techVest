import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import ChatbotWidget from "@/components/techvest/ChatbotWidget"

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <ChatbotWidget />
    </>
  )
}

export default App 