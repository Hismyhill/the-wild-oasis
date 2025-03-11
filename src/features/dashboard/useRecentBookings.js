import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";

import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams("last");

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDays = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading: isLoadingBookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDays),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings, isLoadingBookings };
}
