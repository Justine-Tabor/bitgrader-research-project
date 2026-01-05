const categories = [
  "All",
  "Web Developing",
  "Digital Marketing",
  "Web Design",
  "Programming",
]

export default function Courses() {
  return (
    <section className="max-w-7xl mx-auto px-10 mt-24 mb-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Explore top courses
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Find expertly crafted lessons that guide you from fundamentals to mastery.
          </p>
        </div>

        <button className="self-start md:self-auto border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
          View all courses
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-10">
        {categories.map((cat, i) => (
          <span
            key={cat}
            className={`cursor-pointer transition ${
              i === 0
                ? "text-green-600 font-medium"
                : "hover:text-gray-900"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Real course card */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
          <div className="h-40 bg-gray-100 flex items-center justify-center">
            <img
              src="/src/assets/course.png"
              alt="Course"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 leading-snug">
              The Complete 2021 Web Development
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              by Justine Tabor
            </p>
          </div>
        </div>

        {/* Placeholder cards */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-2xl h-56 animate-pulse"
          />
        ))}

      </div>
    </section>
  )
}
