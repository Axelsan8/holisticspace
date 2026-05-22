'use client'

interface VideoCardProps {
  id: string
  title: string
  description: string
  price: number
  views: number
  image?: string
  therapist: string
  onClick?: () => void
}

export default function VideoCard({
  id,
  title,
  description,
  price,
  views,
  image,
  therapist,
  onClick,
}: VideoCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="h-48 bg-gradient-to-br from-sage-200 to-holistic-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl">🎥</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-holistic-900 truncate">
          {title}
        </h3>
        <p className="text-sm text-holistic-600 text-gray-600 line-clamp-2 mt-2">
          {description}
        </p>
        <p className="text-xs text-sage-600 mt-2">Por: {therapist}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-2xl font-bold text-sage-600">${price}</p>
            <p className="text-xs text-holistic-500">{views} visualizaciones</p>
          </div>
          <button className="bg-sage-600 text-white px-3 py-2 rounded-lg hover:bg-sage-700 transition text-sm">
            Ver
          </button>
        </div>
      </div>
    </div>
  )
}