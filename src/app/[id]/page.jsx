"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

import UpperCaption from "@/components/upperCaption";

const InfoPage = () => {
  const a = usePathname();
  const [Data, setData] = useState([]);
  const FetchData = async () => {
    const JsonData = await fetch(`https://dev.to/api/articles${a}`);
    const ToData = await JsonData.json();
    setData(ToData);
  };
  useEffect(() => {
    FetchData();
  }, []);
  const Time = Data.readable_publish_date;
  console.log(Data.user);
  const userInfo = Data.user;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        minHeight: "98vh",
      }}
    >
      <UpperCaption>
        {Object.keys(Data).length > 0 ? (
          <div className="_outer">
            <img src={Data.social_image} className="_img_Border" />
            <div className="_inner">
              <div className="_Title">{Data.title}:</div>
              <h1 className="_Description">{Data.description}</h1>
              <div className="footer">
                <img src={userInfo.profile_image} className="profilePic"></img>
                <p className="gray">{userInfo.name}</p>
                <p className="gray">{Time}</p>
              </div>
              <h3 className="_Tags">#{Data.tags}</h3>
              <div className="_Reactions">
                <div className="_LikeDiv">
                  <img
                    src="https://market-resized.envatousercontent.com/previews/files/266374050/-p.jpg?w=590&h=590&cf_fit=crop&format=auto&q=85&s=b190419fdf1fecf705c2552f5197fbaf82f5233161b9f654e338e45bc32cc0d1"
                    className="_Like"
                  />
                  {Data.positive_reactions_count}
                </div>
                <div className="_CommentDiv">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTzYdJVFYOlKrGaYjxfFI7Ye7Pj8UjXh2Ag&s"
                    className="_Comment"
                  />
                  {Data.comments_count}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{}}>
            <h1
              style={{
                color: "white",
                position: "absolute",
                top: "540px",
                zIndex: "99",
                left: "1020px",
              }}
            >
              Loading
            </h1>
            <div
              class="spinner"
              style={{
                zIndex: "1",
                position: "absolute",
                top: "500px",
                left: "1000px",
              }}
            ></div>
          </div>
        )}
      </UpperCaption>
    </div>
  );
};
export default InfoPage;
