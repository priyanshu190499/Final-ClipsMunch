import { useState } from 'react'
import bv1 from "../assets/bv1.avif"
import bv2 from "../assets/bv2.jpeg"
import bv3 from "../assets/bv3.avif"
import bv4 from "../assets/bv4.jpg"
import bv5 from "../assets/bv5.jpg"
import bv6 from "../assets/bv6.jpg"
import bv7 from "../assets/bv7.webp"
import bv8 from "../assets/bv8.jpg"
import bv9 from "../assets/bv9.avif"
import bv10 from "../assets/bv10.jpg"
import vv1 from "../assets/vv1.webm"
import vv2 from "../assets/vv2.mp4"
import vv3 from "../assets/vv3.mp4" 
import vv4 from "../assets/vv4.mp4" 
import vv5 from "../assets/vv5.mp4" 
import vv6 from "../assets/vv6.mp4" 
import vv7 from "../assets/vv7.mp4" 
import vv8 from "../assets/vv8.mp4" 
import vv9 from "../assets/vv9.mp4" 
import vv10 from "../assets/vv10.mp4"

const images = [bv1, bv2, bv3, bv4, bv5, bv6, bv7, bv8, bv9, bv10];
const videos = [vv1, vv2, vv3, vv4, vv5, vv6, vv7, vv8, vv9, vv10];

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
  'Content Ideation'
]

export default function FormatStyles() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section className="bg-neutral dark:bg-black text-center py-12  transition-colors relative" >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-snug max-w-7xl mx-auto">
        <span className="text-secondary text-2xl md:text-3xl font-bold">Our Clients Shared Their Love</span> For Our Work
      </h2>

      {/* Image Carousel */}
      <div className="mt-10 overflow-x-auto scrollbar-hide ">
        <div className="flex gap-8 justify-start min-h-[380px] md:min-h-[510px] pl-8 pr-8 ">
          {images.map((src, i) => (
            <div
              key={i}
              className="w-[88vw] sm:w-[40vw] md:w-[20vw] flex-shrink-0 border-2 border-gray-500 relative cursor-pointer"
              onClick={() => setSelectedVideo(videos[i])}
            >
              <img
                src={src}
                alt={`Format style ${i + 1}`}
                className="w-full h-full object-cover "
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[18px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Title - 2 */}
      <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-snug max-w-7xl pt-12 mx-auto">
        <span className="text-secondary text-2xl md:text-3xl font-bold">Social Video Content</span> is the New Fuel to Fire Your Brand’s Organic Growth
      </h2>

      {/* Tags */}
      <div className='flex justify-center items-center'>
        <div className="mt-10 max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-lg font-semibold">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="border-5 min-w-[180px] text-start border-secondary px-4 py-3 rounded-2xl transition-all text-black dark:text-white"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 overflow-hidden whitespace-nowrap py-2 bg-primary border">
        <div className="inline-block animate-marquee text-white font-semibold text-2xl" style={{ minWidth: '200vw' }}>
          {[...marqueeFeaturesData, ...marqueeFeaturesData].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-4">
              <span className=" px-4 py-2 rounded-full">{item}</span>
              {i !== marqueeFeaturesData.length * 2 - 1 && (
                <span className="w-6 h-6 bg-white rounded-full" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Popup Video Modal */}
      {selectedVideo && (
        <div className="fixed bg-black/90 inset-0 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-4  py-12">
            <button
              className="absolute top-0 right-0 text-white text-4xl w-[8%] h-[8%] z-10"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg h-[70vh]"
            />
          </div>
        </div>
      )}
    </section>
  )
}