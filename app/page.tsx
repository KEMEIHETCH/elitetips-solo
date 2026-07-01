'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, CheckCircle, Code2, TrendingUp, 
  Phone, PayPal, Shield, Zap, Users, Award, Sparkles
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Elite<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tips</span></span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/demo" className="text-gray-300 hover:text-white transition">Live Demo</Link>
              <a href="#pricing" className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">🔥 Launch Your Prediction Platform in 1 Day</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Your Own
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Prediction Platform
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Complete, ready-to-deploy system with M-PESA and PayPal. 
              <br />Full source code included. Host it anywhere.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#pricing" className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition flex items-center gap-2">
                Buy Now – $500
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/demo" className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition flex items-center gap-2">
                View Live Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">M-PESA Integration</h3>
              <p className="text-gray-400">Accept payments from Kenyan clients via IntaSend M-PESA</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <PayPal className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">PayPal Integration</h3>
              <p className="text-gray-400">Accept international payments via PayPal</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24-Hour Access</h3>
              <p className="text-gray-400">Automatic access granted to clients after payment</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Admin Dashboard</h3>
              <p className="text-gray-400">Create and manage predictions easily</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full Source Code</h3>
              <p className="text-gray-400">Complete Next.js application with documentation</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">30-Day Support</h3>
              <p className="text-gray-400">Email support included with standard license</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">See It In Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 h-48 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">Admin Dashboard</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 h-48 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">Client Dashboard</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 h-48 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">Payment Flow</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/demo" className="text-purple-400 hover:text-purple-300 transition flex items-center justify-center gap-2">
              View Full Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your License</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white text-center">Standard</h3>
              <div className="text-center my-4">
                <span className="text-4xl font-bold text-white">$500</span>
                <span className="text-gray-400"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Full source code
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Installation guide
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  1 website license
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  30 days support
                </li>
              </ul>
              <a href="https://your-paystack-link.com" className="block text-center bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition">
                Buy Now
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/30 p-8 rounded-2xl">
              <div className="text-center mb-4">
                <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Multi-License</h3>
              <div className="text-center my-4">
                <span className="text-4xl font-bold text-white">$1,500</span>
                <span className="text-gray-400"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Full source code
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Installation guide
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Up to 3 websites
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  90 days support
                </li>
              </ul>
              <a href="https://your-paystack-link.com" className="block text-center bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition">
                Buy Now
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white text-center">Unlimited</h3>
              <div className="text-center my-4">
                <span className="text-4xl font-bold text-white">$3,000</span>
                <span className="text-gray-400"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Full source code
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Installation guide
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Unlimited websites
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  1 year support
                </li>
              </ul>
              <a href="https://your-paystack-link.com" className="block text-center bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">What do I get when I purchase?</h4>
              <p className="text-gray-400">Full source code, database schema, installation guide, user manual, and support based on your license.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">Can I customize the system?</h4>
              <p className="text-gray-400">Yes! You can modify the code freely for your own use.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">Can I resell the system?</h4>
              <p className="text-gray-400">No, the source code is licensed for your use only. You cannot resell the original code.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">Do you offer installation help?</h4>
              <p className="text-gray-400">Yes, installation support is included based on your license.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">What if I need a custom feature?</h4>
              <p className="text-gray-400">Contact us for custom development services (additional charges apply).</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">Where can I host the system?</h4>
              <p className="text-gray-400">Works on Vercel, HostAfrica, and any Node.js hosting provider.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">How do I accept payments from MY clients?</h4>
              <p className="text-gray-400">You set up your own accounts with IntaSend (M-PESA), PayPal, and Paystack. The system uses YOUR API keys, so all payments go directly to YOU. We include a complete payment setup guide.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">Do you take a cut of my sales?</h4>
              <p className="text-gray-400">No. We never see your clients' money. All payments go directly to your IntaSend, PayPal, and Paystack accounts. You keep 100% (minus payment provider fees).</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">Do I need to create my own payment accounts?</h4>
              <p className="text-gray-400">Yes. You need IntaSend (for M-PESA), PayPal (for international), and Paystack (for cards). We provide a step-by-step guide to set up all three in under 30 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} EliteTips. All rights reserved. Made with ❤️ in Kenya</p>
        </div>
      </footer>
    </div>
  )
}
