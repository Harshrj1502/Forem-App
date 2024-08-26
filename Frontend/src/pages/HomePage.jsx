import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Details from "../components/Details";
import { Link } from "react-router-dom";
import Trending from "../components/Trending";
const HomePage = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <section className=" bg-primary px-52  my-40 flex flex-col gap-5">
        <h1 className="text-7xl font-medium text-white">GAME FORUM </h1>
        <h1 className=" text-3xl  text-blue">
          Discover,Collect analyze Your Games
        </h1>
        <div className="flex flex-row gap-5">
          <ul>
            <li className="flex text-grey items-center gap-2">
              <div className="w-2 h-2 bg-red-400"></div>
              Played
            </li>
            <li className="font-bold text-xl text-grey ">20.2K</li>
          </ul>
          <ul>
            <li className="flex text-grey items-center gap-2">
              <div className="w-2 h-2 bg-green-400"></div>Games
            </li>
            <li className="font-bold text-xl  text-grey">15K</li>
          </ul>

          <ul>
            <li className="flex text-grey items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500"></div>Rating
            </li>

            <li className="font-bold text-xl  text-grey">20M</li>
          </ul>

          <ul>
            <li className="flex text-grey items-center gap-2">
              <div className="w-2 h-2 bg-red-400"></div>Lists
            </li>

            <li className="font-bold text-xl   text-grey">29K</li>
          </ul>

          <ul>
            <li className="flex text-grey items-center gap-2">
              <div className="w-2 h-2 bg-red-400"></div>Reviews
            </li>

            <li className="font-bold text-xl text-grey">11M</li>
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <button className="h-10 w-56 text-white bg-pink rounded-md hover:opacity-[0.8] font-light text-sm">
            <Link to={"/RegisterPage"}>Create a free account</Link>
          </button>
          <Link to={"/Loginpage"} className="text-base text-grey cursor-pointer hover:opacity-[0.7] ">
            Log in if you have an account
          </Link>
        </div>
      </section>
      
      <section className="  flex flex-col gap-5 ">
      <h1 className="text-blue text-xl mx-36 ">Recently Trending</h1>
     <div className="flex gap-5 justify-around mx-36">
     <Trending imglink={`https://images4.alphacoders.com/133/1330870.jpeg`}/>
      <Trending imglink={`https://images.alphacoders.com/132/1326355.jpeg`}/>
      <Trending imglink={`https://wallpapercave.com/wp/wp2585294.jpg`}/>
      <Trending imglink={`https://images7.alphacoders.com/135/1353695.jpeg`}/>
      <Trending imglink={`https://wallpapercave.com/wp/wp9493307.jpg`}/>
      <Trending imglink={`https://wallpapercave.com/wp/wp2514145.png`}/>
     </div>
      </section>
      <section className="">
      <Details imglink={`https://backloggd.b-cdn.net/home_demo/home-demo-collection.jpg`}/>
      <Details  imglink={'https://backloggd.b-cdn.net/home_demo/home-demo-list.jpg'}/>
      <Details imglink={'https://backloggd.b-cdn.net/home_demo/home-demo-friends.jpg'}/>
      </section>
      <section className="grid grid-cols-2">
        <Review imglink={'https://images.igdb.com/igdb/image/upload/t_cover_big/co1owa.jpg'}/>
        <Review imglink={'https://images.igdb.com/igdb/image/upload/t_cover_big/co23lh.jpg'}/>
        <Review imglink={'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w4t.jpg'}/>
          <Review imglink={'https://images.igdb.com/igdb/image/upload/t_cover_big/co8aag.jpg'}/>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
