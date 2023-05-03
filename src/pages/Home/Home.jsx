import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef-info")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="mt-8">
        <h1 className="text-center font-bold text-4xl">Chef Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-20 gap-5 mt-10 mb-5">
                {chefData.map((data) => (
                    <Card key={data.id} data={data}></Card>
                    ))}
            </div>
      </div>
    </div>
  );
};

export default Home;
