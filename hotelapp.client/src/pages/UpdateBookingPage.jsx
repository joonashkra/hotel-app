import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bookingService from "../services/bookings";
import UpdateBookingForm from "../components/bookings/UpdateBookingForm";

export default function UpdateBookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState({});

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getBooking = async () => {
      try {
        const fetchedBooking = await bookingService.getById(id);
        setBooking(fetchedBooking);
      } catch (error) {
        setErrorMsg(error.response.data);
      } finally {
        setLoading(false);
      }
    };
    getBooking();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (errorMsg) return <div style={{ color: "red" }}>{errorMsg}</div>;

  return (
    <div className="updateBookingPage">
      <h1>Update booking</h1>
      <UpdateBookingForm booking={booking} id={id} />
    </div>
  );
}
