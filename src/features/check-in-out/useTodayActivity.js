import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

function useTodayActivity() {
  const { data: todayActivity, isLoading: isLoadingTodayActivity } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return { todayActivity, isLoadingTodayActivity };
}

export default useTodayActivity;
