"use client"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './_components/CheckoutForm'
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

const Checkout = () => {
  const searchParams = useSearchParams()
  const options = {
    mode: "payment",
    currency: "usd",
    // passing the client secret obtained from the server
    amount: Number(searchParams.get("amount"))
  };
  return (
    <div className="bg-gray-50 w-full">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={Number(searchParams.get("amount"))} />
      </Elements>
    </div>
  );
};

export default Checkout;
