import React from "react";

function Details({imglink}) {
  return (
    <section className="flex flex-col bg-primary my-20 mx-36">
      <div className=" my-5 mx-6">
        <h className="font-normal text-3xl text-white">APP DETAILS ?</h>
        <p className="text-base text-grey">
          Backloggd is a place to virtually track your game collection. Kee
          your backlog updated, rate the games you've played and add those
          upcoming to your wishlist. Share your gaming journey with your friends
          by following each other to keep up-to-date on your latest play
          sessions.
        </p>
      </div>
      <div className=" flex">
        <div className="w-[50vw]">
        <img src={imglink} alt="NA" /> 
        </div>
        <div className="w-[50vw]">
          <h className="font-normal text-3xl text-white">
            Track your personal game collection
          </h>
          <p className="text-base text-blue">
            Log any and every game you've played, are currently playing, and
            want to play. Be as detailed as you want with features such as time
            tracking, daily journaling, platform ownership and more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details;
