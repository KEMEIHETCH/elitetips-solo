'use client'

import { useState, useEffect } from 'react'
import { 
  Plus, Edit, Trash2, Eye, Calendar, TrendingUp, 
  Users, DollarSign, CheckCircle, Settings
} from 'lucide-react'

export default function AdminDashboard() {
  const [predictions, setPredictions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const samplePredictions = [
    { id: 1, title: 'Premier League Multi-Bet', date: '2026-06-28', matches: 5, odds: 4.50, price: 500, status: 'Published' },
    { id: 2, title: 'Champions League Single Bet', date: '2026-06-29', matches: 1, odds: 1.85, price: 250, status: 'Draft' },
    { id: 3, title: 'Correct Score Predictions', date: '2026-06-30', matches: 3, odds: 3.20, price: 400, status: 'Published' },
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
            <span className="text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition">Logout</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Predictions</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Clients</p>
                <p className="text-2xl font-bold text-white">156</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Revenue</p>
                <p className="text-2xl font-bold text-white">KES 78,500</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Access</p>
                <p className="text-2xl font-bold text-white">32</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Predictions</h2>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Prediction
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-black/30">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Matches</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Odds</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {predictions.map((prediction: any) => (
                <tr key={prediction.id} className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-white">{prediction.title}</td>
                  <td className="px-6 py-4 text-gray-300">{prediction.date}</td>
                  <td className="px-6 py-4 text-gray-300">{prediction.matches}</td>
                  <td className="px-6 py-4 text-purple-400 font-semibold">{prediction.odds}</td>
                  <td className="px-6 py-4 text-white">KES {prediction.price}</td>
                  <td className="px-6 py-4">
                    {prediction.status === 'Published' ? (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">Published</span>
                    ) : (
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">Draft</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-white transition">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-white transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-400 transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
