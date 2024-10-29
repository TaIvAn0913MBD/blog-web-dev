"use client";
import { useRouter } from "next/navigation";
const Module = ({ info }) => {
  const {
    title,
    social_image,
    flare_tag,
    description,
    user,
    published_at,
    id,
  } = info;
  const splitedTime = published_at.split("T")[0];
  const router = useRouter();
  const redirect = () => {
    router.push(`${id}`);
  };
  return (
    <div className="outer-container" onClick={() => redirect()}>
      <div className="flexing">
        <img src={social_image} className="image-container"></img>
        <div className="header">
          {flare_tag ? (
            <div className="flare_tag">{flare_tag.name}</div>
          ) : (
            <div className="flare_tag">No Flare Tag</div>
          )}
          <div className="sigma">
            <h2 className="title">{title}:</h2>
            <h3 className="description"> {description}</h3>
          </div>
        </div>
        <div className="footer">
          <img src={user.profile_image} className="profilePic"></img>
          <p className="gray">{user.name}</p>
          <p className="gray">{splitedTime}</p>
        </div>
      </div>
    </div>
  );
};
export default Module;
