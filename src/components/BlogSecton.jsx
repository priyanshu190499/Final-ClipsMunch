const blogs = [
  {
    title: "How Agencies Save Time and Maximize ROI Using ClipsMunch",
    image: "/images/blog1.jpg", // Replace with real paths
  },
  {
    title: "What Types of Content Can ClipsMunch Edit for Your Business?",
    image: "/images/blog2.jpg",
  },
  {
    title: "5 Reasons How You Can Save $3,000/Month with ClipsMunch",
    image: "/images/blog3.jpg",
  },
];

export default function BlogsSection() {
  return (
    <section className="bg-neutral dark:bg-black text-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-red-600">Read Our</span> Blogs
        </h2>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="h-[4px] w-full bg-red-600" />
              </div>
              <h3 className="mt-4 text-base font-bold">{blog.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
