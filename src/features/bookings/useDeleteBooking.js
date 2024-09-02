import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: trashBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      toast.success(`Booking successfully deleted`);

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: (error) => {
      toast.error("There was an error while deleting the booking");
    },
  });
  return { trashBooking, isDeleting };
}

export default useDeleteBooking;
