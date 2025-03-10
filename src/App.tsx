import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaImage, FaMapMarked, FaFileAlt, FaHeadphones, FaCube } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">Coginvox</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white">Products</a>
              <a href="#" className="text-gray-300 hover:text-white">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-white">Enterprise</a>
              <a href="#" className="text-gray-300 hover:text-white">Resources</a>
            </div>
            <button className="gradient-border">
              <span className="px-4 py-2 block hover:bg-white/5">
                Book a Demo
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-32 pb-16 px-4 min-h-screen flex items-center"
      >
        {/* 3D Model Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/0OmWImavURrAfhnX/scene.splinecode" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Power <span className="gradient-text">Generative AI</span>
            <br />With Your Data
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Make the best models with the best data. Coginvox powers enterprise AI solutions
            with advanced data processing and model optimization.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="gradient-border">
              <span className="px-6 py-3 block hover:bg-white/5">
                Book a Demo <FiArrowRight className="inline ml-2" />
              </span>
            </button>
            <button className="px-6 py-3 border border-white/20 rounded hover:bg-white/5">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Data Labeling Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Data Labeling</h2>
              <p className="text-xl text-gray-400 mb-8">
                The best quality data to fuel the best performing models
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: FaCube, text: "3D" },
                  { icon: FaImage, text: "Image" },
                  { icon: FaMapMarked, text: "Mapping" },
                  { icon: FaFileAlt, text: "Text" },
                  { icon: FaHeadphones, text: "Audio" }
                ].map((item, index) => (
                  <div key={index} className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                    <item.icon />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <button className="gradient-border">
                <span className="px-6 py-3 block hover:bg-white/5">
                  Label My Data <FiArrowRight className="inline ml-2" />
                </span>
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633127007572-d3f73e147d63')] bg-cover bg-center opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Recognition AI Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Content Recognition AI</h2>
              <p className="text-xl text-gray-400 mb-8">
                Advanced AI-powered content identification and analysis
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: FaImage, text: "Visual" },
                  { icon: FaFileAlt, text: "Text" },
                  { icon: FaHeadphones, text: "Speech" },
                  { icon: FaCube, text: "Objects" },
                  { icon: FaMapMarked, text: "Patterns" }
                ].map((item, index) => (
                  <div key={index} className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                    <item.icon />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <button className="gradient-border">
                <span className="px-6 py-3 block hover:bg-white/5">
                  Analyze Content <FiArrowRight className="inline ml-2" />
                </span>
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd66fbe')] bg-cover bg-center opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Applications Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm text-blue-400 mb-2">APPLY AI</div>
            <h2 className="text-4xl font-bold mb-4">Generative AI Applications</h2>
            <p className="text-xl text-gray-400">
              Easily Apply AI to your most challenging use cases with pre-built
              applications that harness the power of customized LLMs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10"
            >
              <h3 className="text-sm text-gray-400 mb-4">COGINVOX PLATFORM</h3>
              <h4 className="text-2xl font-bold mb-4">AI-Powered Decision-Making</h4>
              <p className="text-gray-400 mb-8">
                Transform your data into customized enterprise-ready Generative AI applications.
              </p>
              <div className="aspect-video bg-black/50 rounded-lg overflow-hidden"></div>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10"
            >
              <h3 className="text-sm text-gray-400 mb-4">GENAI PLATFORM</h3>
              <h4 className="text-2xl font-bold mb-4">AI for the Enterprise</h4>
              <p className="text-gray-400 mb-8">
                Transform your data into customized enterprise-ready Generative AI applications.
              </p>
              <div className="aspect-video bg-black/50 rounded-lg overflow-hidden"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Enterprise AI Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Processing",
                description: "Transform and optimize your data for AI models"
              },
              {
                title: "Model Training",
                description: "Train custom models with your enterprise data"
              },
              {
                title: "AI Integration",
                description: "Seamlessly integrate AI into your workflow"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg border border-white/10 hover:border-white/20"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-sm text-gray-400 mb-4">PRODUCTS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Data Engine</a></li>
                <li><a href="#" className="hover:text-white">GenAI Platform</a></li>
                <li><a href="#" className="hover:text-white">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-4">GUIDES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Data Labeling</a></li>
                <li><a href="#" className="hover:text-white">ML Model Training</a></li>
                <li><a href="#" className="hover:text-white">Best Practices</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;