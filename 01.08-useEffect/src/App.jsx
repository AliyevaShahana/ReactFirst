import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TableList from "./table";
import { Flex, Spin } from "antd";

function App() {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [loading, setloading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api";

  async function getdata() {
    setloading(true);
    let res = await axios(`${BASE_URL}/suppliers`);
    setData(res.data);
    setDataCopy(res.data);
    setloading(false);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div id="products-page">
        <div className="container">
          <div className="products-page">
            <h1>Table</h1>
            <input
              type="search"
              placeholder="Search..."
              onChange={(event) => {
                let filter = dataCopy.filter((item) =>
                  item.companyName
                    .toLocaleLowerCase()
                    .includes(event.target.value.toLocaleLowerCase())
                );
                setData(filter);
              }}
            />
            {loading ? (
              <Flex align="center" gap="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
              </Flex>
            ) : (
              <TableList data={data} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
