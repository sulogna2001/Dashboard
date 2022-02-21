import React, { useEffect, useState } from "react";
import "./content.css";
import block from "../../icons/11.png";
import send from "../../icons/send.png";
import bag from "../../icons/bag.png";
import copy from "../../icons/copy.png";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import wallet from "../../icons/Wallet.png";

import { Table } from "./Table";

export const Content = () => {
  const [value, setValue] = useState(0);

  const [Users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const data = await axios.get(
        `https://raw.githubusercontent.com/akshita151199/APIs/main/data`
      );
      console.log(data);
      setUsers(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="main-container-content">
      <div className="section">
        <p className="p-section">Section</p>
      </div>
      <div className="wallet">
        <button className="walletlink">
          
            <img src={wallet} style={{ marginLeft: "-60px" }}></img>
       
          <span className="wallt">0.2 $XYZ</span>
          <div className="tier">Tier1</div>
        </button>
      </div>
      {/* <div className="line"></div> */}<hr className="line"/>
      <div className="tutorial">
        <p className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="button">Tutorial</div>
      <div className="icon">
        <img src={block}></img>
      </div>
      <div className="cross">
        <ClearIcon />
      </div>
      <div className="rewards">
        <p className="your-reward">Your Rewards</p>
        <p className="amount">$ 0.26231428</p>
        <button className="b1" style={{ marginLeft: "40px" }}>
          $40 AVAX
        </button>
        <button className="b1" style={{ marginLeft: "8px" }}>
          $10 BNB
        </button>
        <button className="b1" style={{ marginLeft: "10px" }}>
          $210 BTC
        </button>
        <button className="customLink">
          <img src={send} style={{ marginRight: "10px" }}></img>
          Custom Link
        </button>
      </div>
      <div className="fee" style={{ marginLeft: "33px" }}>
        <img src={bag} className="bag"></img>
        <p className="topText">12.5% of fee</p>
        <p className="refLink">Your Referral Link for xyz</p>
        <div className="link">
          <p className="ref-link">https://unityexchange.design </p>
          <img
            src={copy}
            style={{ marginLeft: "240px", marginTop: "14px" }}
          ></img>
        </div>
      </div>
      <div className="fee" style={{ marginLeft: "370px" }}>
        <img src={bag} className="bag"></img>
        <p className="topText">12.5% of fee</p>
        <p className="refLink">Your Referral Link for xyz</p>
        <div className="link">
          <p className="ref-link">https://unityexchange.design </p>
          <img
            src={copy}
            style={{ marginLeft: "240px", marginTop: "14px" }}
          ></img>
        </div>
      </div>
      <div className="tabs">
        <Box sx={{ width: "100%" }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            <Tab
              label="First Tab"
              style={{
                color: "white",
                textTransform: "none",
                fontSize: "16px",
              }}
            />
            <Tab
              label="Second Tab"
              style={{
                color: "white",
                textTransform: "none",
                fontSize: "16px",
              }}
            />
          </Tabs>
        </Box>
      </div>
      <div className="dataTable">
        <table>
          <thead>
            <tr >
              <th>ASSET</th>
              <th>AMOUNT</th>
              <th>USER ACCOUNT</th>
              <th>REFFERAL EARNING</th>
            </tr>
          </thead>
          <tbody>
            {Users?.data?.map((item, i) => (
              <Table key={item.i} item={item}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
