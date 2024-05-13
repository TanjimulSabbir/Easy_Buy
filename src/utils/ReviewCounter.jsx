import { IoStarOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function ReviewCounter(reviewNum) {
    const filledStars = Array.from({ length: 5 }, (_, index) => {
        if (reviewNum === 5 || index < reviewNum) {
            return <MdOutlineStarPurple500 key={index} className="text-yellow-500" />;
        } else {
            return <IoStarOutline key={index} className="text-yellow-500" />;
        }
    });

    return (
        <div className="flex items-center space-x-1">
            {filledStars}
        </div>
    );
};
