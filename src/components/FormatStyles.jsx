import { useState } from 'react'
import bg from "../assets/bg-2.jpg"

const images = Array.from({ length: 10 }, (_, i) => bg);

const tags = [
  '3D Animation',
  'Repurposed Video',
  'ShortForm Content',
  '2D Motion Animation',
  'Spokesperson Video',
  'Podcast Video',
  'Faceless Video',
  'UGC/Influencer Video',
  'Corporate Video',
  'Youtube Video',
]

const marqueeFeaturesData = [
  'Thumbnail',
  'Ads',
  'Youtube',
  'Shortform',
  'VSL',
  'Scripting',
  'Content Ideation',
  'Thumbnail',
  'Ads',
  'Youtube',
  'Shortform',
  'VSL',
  'Scripting',
  'Content Ideation',

]

export default function FormatStyles() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section className="bg-neutral dark:bg-black text-center py-12  transition-colors relative">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-extrabold text-black dark:text-white leading-snug max-w-3xl mx-auto">
        <span className="text-primary">Our Clients Shared Their Love</span> For Our Work
      </h2>

      {/* Image Carousel */}
      <div className="mt-10 overflow-x-auto scrollbar-hide ">
        <div className="flex gap-12 justify-center min-h-[380px] md:min-h-[440px] ">
          {images.map((src, i) => (
            <div key={i} className="w-[90%] sm:w-[40%] md:w-[20%] flex-shrink-0 border-2 border-gray-500  relative">
              <img
                src={src}
                alt={`Format style ${i + 1}`}
                className="w-full h-full object-cover "
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[18px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className='flex justify-center items-center'>

      <div className="mt-10 max-w-5xl flex flex-wrap justify-center gap-4 text-sm font-medium">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="border-3 min-w-[180px] border-primary px-4 py-2 rounded-xl transition-all  text-black dark:text-white"
          >
            {tag}
          </div>
        ))}
      </div>

      </div>

      {/* Marquee */}
      <div className="mt-12 overflow-hidden whitespace-nowrap py-2 bg-primary">
        <div className="inline-block animate-marquee text-white font-semibold text-2xl">
          {marqueeFeaturesData.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-4">
              <span className="bg-primary/80 px-4 py-2 rounded-full">{item}</span>
              {i !== marqueeFeaturesData.length - 1 && (
                <span className="w-4 h-4 bg-white rounded-full" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Popup Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl mx-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-10"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg h-[50vh]"
            />
          </div>
        </div>
      )}
    </section>
  )
}
