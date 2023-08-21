import React from 'react'
import { healthyfood } from '../assets'

const Home = () => {
  return (
    <div className="bg-black">
      <div className="mt-20 relative">
        <img
          className="w-full h-auto"
          src={healthyfood}
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
          <h1 className="text-2xl font-semibold mb-4">Welcome to Our Healthy Recipes Website</h1>
          <p className="text-white">
            Discover a world of nutritious and delicious recipes that will keep you on track towards a healthier lifestyle.
          </p>

          <p className="text-white mt-4">
            Whether you're looking for plant-based options, low-carb meals, or something in between, our collection of recipes has something for everyone.
          </p>

          <p className="text-white mt-4">
            Start exploring and cooking up a storm in your kitchen while nourishing your body and delighting your taste buds!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home