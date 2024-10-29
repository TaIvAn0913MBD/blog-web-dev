"use client";
import { useRouter } from "next/navigation";

const UpperCaption = ({ children }) => {
  // image/jpeg;base64,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
  const router = useRouter();
  const redirect = () => {
    router.back();
  };
  const AddPost = () => {
    router.push("post");
  };
  return (
    <div>
      <div className="-Caption">
        <span
          style={{ display: "flex", gap: "20px" }}
          onClick={() => redirect()}
        >
          <img
            src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
            className="-Image"
          />
          <h1 className="-Home">Home</h1>
        </span>
        <span
          style={{ display: "flex", gap: "20px" }}
          onClick={() => AddPost()}
        >
          <img
            src="https://static.thenounproject.com/png/3521088-200.png"
            className="-AddImage"
          />
          <h1 className="-Add">Add Post</h1>
        </span>
      </div>
      {children}
    </div>
  );
};
export default UpperCaption;
