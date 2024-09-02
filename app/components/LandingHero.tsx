import React, { FC } from "react"

const LandingHero: FC = () => {
  return (
    <div className="w-full h-screen bg-landing-hero bg-cover text-white">
      <div className="flex flex-col w-full h-screen bg-image-cover-film justify-center items-center">
        <h1 className="mb-4 text-7xl font-bold shadow-lg">Love for CS</h1>
        <p className="mb-5 text-4xl shadow-md">Bla bla about blog</p>
        <div className="w-1/5 border-solid border-b-2" />
      </div>
    </div>
  )
}

export default LandingHero
