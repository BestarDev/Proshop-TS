import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

type RatingProps = {
    value: number;
    text: string;
}

const Rating = ({value, text} : RatingProps) => {
  return (
    <div className="rating">
        {Array.from({length: 5}, (_, index) => index + 1).map((num) => (
            <span key={num}>
                { num < value ? (num + 1 > value ? ( <FaStarHalfAlt /> ) : ( <FaStar /> )) : (<FaRegStar />) }
            </span>
        ))}
        <span className="rating-text">{text && text}</span>
    </div>
  )
}

export default Rating