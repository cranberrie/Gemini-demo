import { motion } from 'framer-motion';
import { Share2, Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export const Socials = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const brandColors = [
    { name: 'Rose', hex: '#fb7185', description: 'Primary Brand Color' },
    { name: 'Indigo', hex: '#6366f1', description: 'Secondary Brand Color' },
    { name: 'Dark Slate', hex: '#0d2c2d', description: 'Deep Background' },
    { name: 'Midnight', hex: '#1d2f58', description: 'Secondary Background' },
  ];

  const socialInfo = {
    tag: '@techstackconf2026',
    name: 'TechStackConference',
    font: 'Inter',
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Social <span className="text-primary-600 dark:text-primary-400">Kit</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Everything you need to share the TechStack Conference 2026 experience with your network.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Brand Identity */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Share2 className="h-6 w-6 text-primary-600" />
            Brand Identity
          </h2>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Official Logo</h3>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="flex justify-center p-12 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <img src="/logo.svg" alt="TechStack Logo" className="h-48 w-48 drop-shadow-2xl" />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">TechStack Main Logo</p>
                      <p className="text-sm text-slate-500 italic">Vector SVG format (Scalable)</p>
                    </div>
                    <a 
                      href="/logo.svg" 
                      download 
                      className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary-500/20"
                    >
                      <Download className="h-4 w-4" /> Download SVG
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Typography</h3>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-3xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {socialInfo.font}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Primary typeface for all digital and print materials.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colors & Socials */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Color Palette & Socials</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {brandColors.map((color) => (
              <div key={color.hex} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="h-20 w-full" style={{ backgroundColor: color.hex }} />
                <div className="p-4">
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{color.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <code className="text-xs text-slate-500">{color.hex}</code>
                    <button 
                      onClick={() => copyToClipboard(color.hex, color.hex)}
                      className="text-slate-400 hover:text-primary-600 transition-colors"
                    >
                      {copied === color.hex ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Social Presence</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Official Tag</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{socialInfo.tag}</p>
                </div>
                <button 
                  onClick={() => copyToClipboard(socialInfo.tag, 'tag')}
                  className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 hover:border-primary-500 transition-all"
                >
                  {copied === 'tag' ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-slate-400" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Display Name</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{socialInfo.name}</p>
                </div>
                <button 
                  onClick={() => copyToClipboard(socialInfo.name, 'name')}
                  className="bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 hover:border-primary-500 transition-all"
                >
                  {copied === 'name' ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-slate-400" />}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
