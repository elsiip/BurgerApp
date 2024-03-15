import Navbar from "../../components/navbar";

export default function About() {
  return (
    <div className="pt-32">
      <Navbar />
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p>How we can be like today!</p>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg" alt="Delicious Burger" className="w-full max-w-lg rounded-lg shadow-lg" style={{ width: "auto", height: "300px" }}/>
        </div>
        <div className="max-w-sm mx-auto">
          <p className="text-center">Welcome to our burger app! We believe in giving you the power to create your perfect burger experience. With our app, you can customize every aspect of your burger, from the patty to the toppings, ensuring that every bite is exactly how you want it.</p>
          <p className="text-center">Whether you're a fan of classic toppings like lettuce and tomato, or you prefer something more adventurous like avocado and sriracha mayo, our app has you covered. Simply choose your preferred options, and we'll take care of the rest.</p>
          <p className="text-center">Join us on a journey of flavor exploration and satisfaction. Download our app now and start building your dream burger today!</p>
        </div>
      </div>
    </div>
  );
}
