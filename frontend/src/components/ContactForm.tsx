import { useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

interface ContactFormProps {
  isDarkMode?: boolean;
}

export default function ContactForm({ isDarkMode = true }: ContactFormProps) {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.post("http://localhost:3000/contact", formData);
            setStatus("Message sent successfully! 🎉");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("Failed to send message. Please try again. ❌");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto"
        >
            <div 
                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.25)] hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.2)] dark:hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.35)] border border-gray-200/20 dark:border-gray-700/20 p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)' // Force background color
                }}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-6">
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Force text color
                            >
                                Your Name
                            </label>
                            <input 
                                name="name" 
                                id="name"
                                type="text"
                                placeholder="Enter your full name" 
                                value={formData.name}
                                onChange={handleChange} 
                                required 
                                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg transition-all duration-200"
                                style={{ 
                                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                                    color: isDarkMode ? 'white' : '#111827'
                                }}
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Force text color
                            >
                                Email Address
                            </label>
                            <input 
                                name="email" 
                                id="email"
                                type="email" 
                                placeholder="your.email@example.com" 
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg transition-all duration-200"
                                style={{ 
                                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                                    color: isDarkMode ? 'white' : '#111827'
                                }}
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="message" 
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Force text color
                            >
                                Message
                            </label>
                            <textarea 
                                name="message" 
                                id="message"
                                placeholder="Tell me about your project, idea, or just say hello..." 
                                value={formData.message}
                                onChange={handleChange} 
                                required 
                                rows={6}
                                className="w-full px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg transition-all duration-200 resize-none"
                                style={{ 
                                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                                    color: isDarkMode ? 'white' : '#111827'
                                }}
                            />
                        </div>
                    </div>

                    <motion.button 
                        type="submit" 
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-white font-medium py-4 px-8 rounded-2xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ 
                            background: isDarkMode 
                                ? 'linear-gradient(to right, #3b82f6, #9333ea)'
                                : 'linear-gradient(to right, #14b8a6, #06b6d4)',
                            color: 'white' 
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="w-6 h-6 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="text-white font-medium">Sending...</span>
                            </>
                        ) : (
                            <>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span className="text-white font-medium">Send Message</span>
                            </>
                        )}
                    </motion.button>

                    {status && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-center p-4 rounded-2xl font-medium text-lg ${
                                status.includes("successfully") 
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50" 
                                    : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700/50"
                            }`}
                        >
                            {status}
                        </motion.div>
                    )}
                </form>
            </div>
        </motion.div>
    );
}