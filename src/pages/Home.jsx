import React, { useEffect, useState } from "react";
import Card from "../components/admin/Card";
import Admin from "../components/admin/Admin";

const Home = () => {
  const [quotesData, setQuotesData] = useState([]);
  useEffect(() => {
    const callingApi = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const quotes = await response.json();
        setQuotesData(quotes);
        console.log(quotesData);
      } catch (error) {
        console.log(error);
      }
    };
    callingApi();
  }, []);
  return (
    <div className="bg-slate-300 p-4">
      <Admin></Admin>
      <div className="flex flex-wrap p-8 gap-3  w-[100%] h-[100%]">
        {quotesData.map((quote, index) => (
          <Card key={index} {...quote}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
