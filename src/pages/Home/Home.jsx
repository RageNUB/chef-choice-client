import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://chef-choice-server.vercel.app/chef-info")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="mt-8">
        <h1 className="text-center font-bold lg:text-4xl text-3xl">
          Chef Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-5 mt-10 mb-5">
          {chefData.map((data) => (
            <Card key={data.id} data={data}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
