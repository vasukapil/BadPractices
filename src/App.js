import { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import Dropdown from "./components/Dropdown";
import InputFile from "./components/InputFile";
import PieChart from "./components/PieChart";
import Stats from "./components/Stats";
import Table from "./components/Table";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [unsoldAmount, setUnsoldAmount] = useState(0);
  const [unsoldCount, setUnsoldCount] = useState(0);
  const [soldAmount, setSoldAmount] = useState(0);
  const [soldCount, setSoldCount] = useState(0);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(
      "https://roxiler-interviews.s3.amazonaws.com/product_transaction.json"
    )
      .then((response) => response.json())
      .then((res) => setApiData(res));
  }, []);

  useEffect(() => {
    setSoldAmount(0);
    setSoldCount(0);
    setUnsoldAmount(0);
    setUnsoldCount(0);
    apiData.length > 0 &&
      apiData?.map((data) => {
        let month = new Date(data.dateOfSale).getMonth();
        if (month.toString() === selectedMonth && data.sold) {
          console.log("here..");
          setSoldAmount((prev) => prev + data.price);
          setSoldCount((prev) => prev + 1);
        } else if (month.toString() === selectedMonth && !data.sold) {
          console.log("else here..");
          setUnsoldAmount((prev) => prev + data.price);
          setUnsoldCount((prev) => prev + 1);
        }
      });
  }, [selectedMonth]);

  // const getStats = () => {
  // apiData.length > 0 &&
  //   apiData?.map((data) => {
  //     let month = new Date(data.dateOfSale).getMonth();
  //     if (month.toString() === selectedMonth && data.sold) {
  //       console.log("here..");
  //       setSoldAmount((prev) => prev + data.price);
  //       setSoldCount((prev) => prev + 1);
  //     } else if (month === selectedMonth && !data.sold) {
  //       setUnsoldAmount((prev) => prev + data.price);
  //       setUnsoldCount((prev) => prev + 1);
  //     }
  //   });
  //   return { soldAmount, soldCount, unsoldAmount, unsoldCount };
  // };
  return (
    <div className="App">
      <div>
        <Dropdown setSelectedMonth={setSelectedMonth} />
      </div>
      <div>
        <div>
          <InputFile />
        </div>
        <div>
          <Stats
            a={unsoldAmount}
            b={unsoldCount}
            c={soldAmount}
            d={soldCount}
          />
        </div>
      </div>
      <div>
        <div>
          <BarChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default App;
