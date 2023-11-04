"use client";

import axios from "axios";
import { Card } from "@/componets";
import React, { useState, useEffect, useMemo } from "react";

const category = [
  "chemistry",
  "economics",
  "peace",
  "physics",
  "medicine",
  "literature",
];
const year = [...Array(119).keys()].map((i) => (1900 + i).toString()); // Generate an array of years from 1900 to 2018

export default function Home() {
  const [data, setData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All category");
  const [selectYear, setSelectYear] = useState("All year");

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nobelprize.org/v1/prize.json"
      );

      setData(data.prizes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChangeCategory = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleChangeYear = (e) => {
    setSelectYear(e.target.value);
  };

  const getFilteredData = () => {
    let filteredData = data;

    if (selectCategory !== "All category") {
      filteredData = filteredData.filter(
        (item) => item.category === selectCategory
      );
    }

    if (selectYear !== "All year") {
      filteredData = filteredData.filter((item) => item.year === selectYear);
    }

    return filteredData;
  };

  const filteredList = useMemo(getFilteredData, [
    selectCategory,
    selectYear,
    data,
  ]);

  return (
    <main>
      <select onChange={handleChangeCategory}>
        <option>All category</option>
        {category.map((data, i) => (
          <option key={i}>{data}</option>
        ))}
      </select>

      <select style={{ marginLeft: "30px" }} onChange={handleChangeYear}>
        <option>All year</option>
        {year.map((data, i) => (
          <option key={i}>{data}</option>
        ))}
      </select>

      {filteredList.map((data, i) => (
        <Card
          key={i}
          category={data.category}
          year={data.year}
          overallMotivation={data.overallMotivation}
          laureates={data.laureates}
        />
      ))}
    </main>
  );
}
