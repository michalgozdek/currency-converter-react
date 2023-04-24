import { Time } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const Clock = () => {
  const dateNow = useCurrentDate();

  return <Time>Dzisiaj jest: {formatDate(dateNow)}</Time>;
};
