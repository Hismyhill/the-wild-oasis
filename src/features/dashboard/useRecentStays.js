import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";

import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams("last");

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDays = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading: isLoadingStays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDays),
    queryKey: ["Stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, confirmedStays, isLoadingStays, numDays };
}
