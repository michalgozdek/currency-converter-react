import { useEffect, useState } from "react";
import { Time } from "./styled";

export const Clock = () => {
  const [dateNow, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (date) =>
    date.toLocaleString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return <Time>Dzisiaj jest: {formatDate(dateNow)}</Time>;
};
