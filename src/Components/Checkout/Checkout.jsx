import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialTotalPrice = location.state?.totalPrice || 0;
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  // Handle form submission
  const handleCheckout = () => {
    // Display success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Order placed successfully!',
      text: `Payment method: ${paymentMethod}`,
      confirmButtonColor: '#6086d2',
    }).then(() => {
      // Clear form fields
      setCustomerDetails({ name: "", address: "", phone: "" });
      setPaymentMethod("online");

      // Clear total price
      setTotalPrice(0);

      // Clear localStorage if needed
      localStorage.clear(); 

      navigate('/');
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg p-4 border rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center"> Payment Form</h1>
        <div className="space-y-4">
          {totalPrice > 0 && (
            <div className="text-right">
              <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          )}
          <div>
            <label className="block font-semibold">Name:</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={customerDetails.name}
              onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-semibold">Address:</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={customerDetails.address}
              onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-semibold">Phone:</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={customerDetails.phone}
              onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
            />
          </div>
          <div>
            <h2 className="font-semibold">Payment Method:</h2>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                Online Payment
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          <button
            className="btn w-full bg-[#6086d2] text-white"
            onClick={handleCheckout}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
