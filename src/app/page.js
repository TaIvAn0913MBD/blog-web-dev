"use client";
import { useEffect, useState } from "react";
import Module from "../components/module";
import UpperCaption from "../components/upperCaption";

const Page = () => {
  const [Data, setData] = useState([]);
  const [numberPage, setNumberPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const FetchData = async () => {
    const JsonData = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${numberPage}`
    );
    const ToData = await JsonData.json();
    setData(ToData);
  };
  useEffect(() => {
    FetchData();
  }, [numberPage]);
  const GoBack = () => {
    if (numberPage == 1) {
      setNumberPage(1);
    } else {
      setNumberPage(numberPage - 1);
    }
  };

  const NextPage = () => {
    setNumberPage(numberPage + 1);
  };
  const handleInputValue = (value) => {
    setSearchValue(value);
  };
  const Newtask = (blog) => {
    return blog.filter((news) => {
      return news.title
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase);
    });
  };
  let filtered = Data.filter((name) => {
    const ToLowerCaseInput = searchValue.toLocaleLowerCase();
    const ToLowerCaseName = name.title.toLocaleLowerCase();
    return ToLowerCaseName.includes(ToLowerCaseInput);
  });
  return (
    <UpperCaption>
      <div className="HT">
        <div>
          <h1 style={{ color: "white" }}>All Blog Parts</h1>
          <div className="searchPart">
            <input
              className="input"
              value={searchValue}
              onChange={(event) => handleInputValue(event.target.value)}
            />
            <button className="button">
              <h2 style={{ margin: 0 }}>Search</h2>
            </button>
          </div>
          <div className="Page">
            {filtered.length > 0 ? (
              filtered.map((indo, index) => {
                return <Module info={indo} key={index} />;
              })
            ) : (
              <h1 style={{ color: "white" }}>No article found</h1>
            )}
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="Pagination">
            <button
              onClick={() => GoBack()}
              class="glow-on-hover"
              type="button"
            >
              <h1>Go Back</h1>
            </button>
            <div className="PageNumber">{numberPage}</div>
            <button
              onClick={() => NextPage()}
              class="glow-on-hover"
              type="button"
            >
              <h1>Next Page</h1>
            </button>
          </div>
        ) : null}
      </div>
    </UpperCaption>
  );
};
export default Page;
