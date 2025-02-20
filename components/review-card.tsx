import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ReviewCardProps {
  review: {
    rating: number
    comment: string
    date: string
    reviewerName: string
  }
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
        </div>
        <p className="font-semibold">{review.reviewerName}</p>
        <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
      </CardContent>
    </Card>
  )
}

