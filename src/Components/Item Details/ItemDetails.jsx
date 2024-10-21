import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // Fetch product details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemResponse = await axios.get(`https://dummyjson.com/products/${id}`);
        setData(itemResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  // Add item to cart with SweetAlert
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = cartItems.find((item) => item.id === data.id);
    
    if (itemExists) {
      itemExists.quantity += quantity;
    } else {
      cartItems.push({ ...data, quantity });
    }
    
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setLoading(false);

    // SweetAlert notification
    Swal.fire({
      title: "Added to Cart!",
      text: `${data.title} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Go to Cart"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      {data ? (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Display only the first image centered */}
            <div className="p-4 border rounded-lg shadow-md w-full max-w-xs">
              <img
                src={data.images[0]} // Only showing the first image
                alt={data.title}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold">{data.title}</h2>
            <p className="text-lg lg:text-xl text-gray-700">
              {data.discountPercentage ? (
                <>
                  <span className="line-through">${data.price}</span>{" "}
                  <span className="text-red-500">
                    ${(data.price - (data.price * data.discountPercentage) / 100).toFixed(2)}
                  </span>
                </>
              ) : (
                `$${data.price}`
              )}
            </p>

            {/* Show category, brand, rating */}
            <p className="text-lg lg:text-xl text-gray-700">
              <strong>Category:</strong> {data.category}
            </p>
            <p className="text-lg lg:text-xl text-gray-700">
              <strong>Brand:</strong> {data.brand}
            </p>
            <p className="text-lg lg:text-xl text-gray-700">
              <strong>Rating:</strong> {data.rating} / 5
            </p>

            {/* Show product description */}
            <p className="text-lg text-gray-600">
              <strong>Description:</strong> {data.description}
            </p>

            {/* Reviews placeholder */}
            <div className="mt-4">
              <h4 className="font-semibold">Reviews:</h4>
              <p className="italic text-gray-500">No reviews yet.</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Quantity:</h4>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="input input-bordered w-24"
              />
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <button
                className="btn w-full bg-[#6086d2] text-white"
                onClick={addToCart}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add to Cart"}
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="btn w-full bg-[#0c4657] text-white"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetails;
