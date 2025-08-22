import { useState } from 'react'
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"

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
  const [paused, setPaused] = useState(false)

  // motion value for x
  const x = useMotionValue(0)

  // continuously move left unless paused
  useAnimationFrame((t, delta) => {
    if (!paused) {
      const moveBy = (delta / 1000) * 60 // speed (px/sec)
      x.set(x.get() - moveBy)

      // reset when halfway through (because we doubled images)
      if (x.get() <= -(images.length * 350)) {
        x.set(0)
      }
    }
  })

  return (
    <motion.section
      className="bg-neutral dark:bg-black text-center pt-12 transition-colors relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-snug max-w-7xl px-8 mx-auto"
      >
        <span className="text-secondary">Our Clients Shared Their Love</span> For Our Work
      </motion.h2>

       {/* 🔥 Continuous Loop Image Carousel */}
      <div
        className="mt-10 overflow-hidden mx-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-8 custom-videos-marquee"
          style={{ x }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="w-[88vw] sm:w-[40vw] md:w-[20vw] flex-shrink-0 relative cursor-pointer "
              onClick={() => setSelectedVideo(videos[i % videos.length])}
            >
              <img
                src={src}
                alt={`Format style ${i + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[18px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Title 2 */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-snug max-w-7xl pt-12 px-8 mx-auto "
      >
        <span className="text-secondary">Social Video Content</span> is the New Fuel to Fire Your Brand’s Organic Growth
      </motion.h2>

      {/* Tags */}
      <div className='flex justify-center items-center mx-8 '>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-lg font-semibold"
        >
          {tags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
              className="border-5 min-h-[110px] min-w-[130px] text-start border-secondary px-4 py-3 rounded-2xl flex justify-center items-center text-black dark:text-white custom-tags"
            >
              <p>{tag}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, delay: 1.2 }}
  className="mt-12 overflow-hidden whitespace-nowrap py-2 bg-primary"
>
  <motion.div
    className="inline-flex text-white font-semibold text-2xl"
    animate={{ x: ["0%", "-50%"] }} // shift half the content left
    transition={{
      duration: 25, // tweak speed here
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...marqueeFeaturesData, ...marqueeFeaturesData, ...marqueeFeaturesData, ...marqueeFeaturesData].map((item, i) => (
      <span key={i} className="inline-flex items-center gap-3 mx-4">
        <span className="px-4 py-2 rounded-full">{item}</span>
        {i !== marqueeFeaturesData.length * 4 - 1 && (
          <span className="w-6 h-6 bg-white rounded-full" />
        )}
      </span>
    ))}
  </motion.div>
</motion.div>


      {/* Popup Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed bg-black/90 inset-0 z-50 flex items-center justify-center"
        >
          <div className="relative w-full max-w-5xl mx-4 py-12">
            <button
              className="absolute top-0 right-0 text-white text-4xl w-[8%] h-[8%] z-10"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <motion.video
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg h-[70vh]"
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}
