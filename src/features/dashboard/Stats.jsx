import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, cabinCount, numDays }) {
  const numBookings = bookings?.length;

  const sales = formatCurrency(
    confirmedStays?.reduce((acc, curr) => acc + curr.totalPrice, 0)
  );

  const checkins = confirmedStays?.length;

  const occupancy = Math.round(
    (confirmedStays?.reduce((acc, curr) => acc + curr.numNights, 0) /
      (cabinCount * numDays)) *
      100
  );

  return (
    <>
      <Stat
        title="bookings"
        icon={<HiOutlineBriefcase />}
        color="blue"
        value={numBookings}
      />
      <Stat
        title="sales"
        icon={<HiOutlineBanknotes />}
        color="green"
        value={sales}
      />
      <Stat
        title="check ins"
        icon={<HiOutlineCalendar />}
        color="indigo"
        value={checkins}
      />
      <Stat
        title="occupancy rate"
        icon={<HiOutlineChartBar />}
        color="yellow"
        value={`${occupancy}% `}
      />
    </>
  );
}

export default Stats;
