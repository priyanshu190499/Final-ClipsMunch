import b1 from "../assets/edt1.jpg"
import b2 from "../assets/edt2.jpeg"
import b3 from "../assets/edt3.jpeg"
import b4 from "../assets/edt4.jpg"
import b5 from "../assets/edt5.jpg"

const blogs = [
  {
    title: "How Agencies Save Time and Maximize ROI Using ClipsMunch",
    image: b1,
  },
  {
    title: "What Types of Content Can ClipsMunch Edit for Your Business?",
    image: b2,
  },
  {
    title: "5 Reasons How You Can Save $3,000/Month with ClipsMunch",
    image: b3,
  },
  {
    title: "What Types of Content Can ClipsMunch Edit for Your Business?",
    image: b4,
  },
  {
    title: "5 Reasons How You Can Save $3,000/Month with ClipsMunch",
    image: b5,
  },
];

export default function BlogsSection() {
  return (
    <section className="bg-neutral dark:bg-black text-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          <span className="text-red-600">Read Our</span> Blogs
        </h2>

        {/* Horizontal Scrollable Blog Cards */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group cursor-pointer min-w-[280px] max-w-[340px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="h-[4px] w-full bg-red-600" />
              </div>
              <h3 className="mt-4 text-base font-bold text-black dark:text-white">{blog.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}