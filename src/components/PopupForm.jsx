
import { useState, useRef } from 'react'


export default function PopupForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '', email: '', contact: '', message: ''
  })
  const formRef = useRef(null)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Close if overlay is clicked (not form)
  const handleOverlayClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      onClose()
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Replace with actual endpoint
    await fetch('https://script.google.com/macros/s/AKfycbw-EhAgo1W8iXKcZ53Z0208_-uH_NZkZbwJFSJ3ur26_51WFOtnTgLZCvsgdjRZ98nr/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 bg-black/80 animate-fadeIn"
      style={{ background: 'rgba(10,10,10,0.92)' }}
      onClick={handleOverlayClick}
    >
      <form
        ref={formRef}
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-xl w-full max-w-md space-y-5 shadow-lg animate-slideUp border-t-4 border-red-600"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
      >
        {/* Red cross close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 text-red-600 hover:bg-red-100 active:bg-red-200 rounded-md p-1 transition-colors duration-150 text-2xl font-bold shadow-md"
          style={{ lineHeight: 1 }}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-black mb-2 tracking-tight">Schedule a <span className='text-red-600'>Call</span></h2>
        <input
          name="name"
          placeholder="Name"
          required
          className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all text-black placeholder-gray-500 bg-gray-50"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all text-black placeholder-gray-500 bg-gray-50"
          onChange={handleChange}
        />
        <input
          name="contact"
          placeholder="Contact Number"
          required
          pattern="\d+"
          className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all text-black placeholder-gray-500 bg-gray-50"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message (Optional)"
          className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all text-black placeholder-gray-500 bg-gray-50 min-h-[80px]"
          onChange={handleChange}
        />
        <div className="flex justify-between items-center mt-2">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-2 rounded shadow-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Submit
          </button>
          
        </div>
      </form>
      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slideUp {
          from { transform: translateY(40px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.35s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  )
}
