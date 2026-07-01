'use client'

import { useState, useEffect } from 'react'
import { Calendar, TrendingUp, Lock, Unlock } from 'lucide-react'

export default function ClientDashboard() {
  const [predictions, setPredictions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const samplePredictions = [
    { id: 1, title: 'Premier League Multi-Bet', date: '2026-06-28', odds: 4.50, price: 500, isUnlocked: true },
    { id: 2, title: 'Champions League Single Bet', date: '2026-06-29', odds: 1.85, price: 250, isUnlocked: false },
    { id: 3, title: 'Correct Score Predictions', date: '2026-06-30', odds: 3.20, price: 400, isUnlocked: false },
  ]

  useEffect(() => {
    setPredictions(samplePredictions)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-black/50 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-white">EliteTips</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, Client</span>
            <button className="text-gray-300 hover:text-white transition">Logout</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">My Predictions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {predictions.map((prediction: any) => (
            <div key={prediction.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">{prediction.title}</h3>
                  {prediction.isUnlocked ? (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <Unlock className="w-3 h-3" />
                      Unlocked
                    </span>
                  ) : (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Locked
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {prediction.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Odds: {prediction.odds}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">KES {prediction.price}</span>
                  {prediction.isUnlocked ? (
                    <button className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-500/30 transition">
                      View Predictions
                    </button>
                  ) : (
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition">
                      Unlock Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
