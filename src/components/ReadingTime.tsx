import { useCounterStore } from "../store/counterStore";
import { calculateReadingTime } from "../utils/textAnalyzer";

export const ReadingTime = () => {
  const text = useCounterStore((state) => state.text);
  const time = calculateReadingTime(text);
  return (
    <p className="text-black">
      Approx. reading time: {time.toFixed(2)}{" "}
      {time === 1 ? "minute" : "minutes"}
    </p>
  );
};
