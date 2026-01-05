export default function PageHeader({
  subtitle,
  title,
  description,
  image,
}) {
  return (
    <div
      className="
        bg-gradient-to-r from-teal-500 to-green-400
        rounded-2xl
        px-8 py-8
        flex items-center justify-between
        min-h-[160px]

        animate-fade-in-up
      "
    >
      <div className="max-w-xl text-white">
        <p className="text-sm opacity-90">{subtitle}</p>
        <h1 className="text-3xl font-semibold mt-1">{title}</h1>
        <p className="text-sm mt-2 opacity-90">{description}</p>
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          className="h-28 object-contain translate-y-2"
        />
      )}
    </div>
  )
}
