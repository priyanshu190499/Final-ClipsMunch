
export default function CTAButton({openPopup}) {
  return (
     <button
              onClick={openPopup}
              className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-white text-red-600 font-bold text-base md:text-lg shadow-md hover:bg-red-50 active:bg-red-100 transition-all border-2 border-white focus:outline-none"
              style={{boxShadow:'0 2px 12px 0 rgba(0,0,0,0.10)'}}
            >
              <span className="relative flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-red-600 mr-2 animate-glowDot" />
                SCHEDULE A CALL
              </span>
    </button>
  )
}
