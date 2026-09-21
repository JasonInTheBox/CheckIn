import { useState } from 'react'
import CheckInFlow from './components/CheckInFlow'
import Footer from './components/Footer'
import Landing from './components/Landing'

export default function App() {
  const [started, setStarted] = useState(false)
  const [sessionKey, setSessionKey] = useState(0)

  function exitToLanding() {
    setStarted(false)
    setSessionKey((k) => k + 1)
  }

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <main className="flex flex-1 flex-col items-center justify-center py-16">
        {started ? (
          <CheckInFlow key={sessionKey} onExit={exitToLanding} />
        ) : (
          <Landing onStart={() => setStarted(true)} />
        )}
      </main>
      <Footer />
    </div>
  )
}
