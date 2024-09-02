import Image from "next/image";

import LandingHero from "./components/LandingHero"
import PostGallery from "./components/PostGallery"

const Home: FC = ({ metadata }) => {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-24">
      <LandingHero />
      <PostGallery />
    </main>
  );
}

export default Home
