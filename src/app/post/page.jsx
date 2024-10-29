"use client";
import UpperCaption from "@/components/upperCaption";
import { useState } from "react";
import { useEffect } from "react";
const Page = () => {
  const [titleInput, setTitleInput] = useState(null);
  const [descriptionInput, setDescriptionInput] = useState(null);
  const [titleState, setTitleState] = useState(true);
  const [descState, setDescState] = useState(true);
  const [info, setInfo] = useState();
  const HandleTitleValue = (value) => {
    setTitleInput(value);
  };
  const HandleDescriptionValue = (value) => {
    setDescriptionInput(value);
  };
  useEffect(() => {
    if (titleInput == "") {
      setTitleState(false);
    } else {
      setTitleState(true);
    }
  }, [titleInput]);
  useEffect(() => {
    if (descriptionInput == "") {
      setDescState(false);
    } else {
      setDescState(true);
    }
  }, [descriptionInput]);
  const ClickedDone = () => {
    if (titleInput == "" || titleInput == null) {
      setTitleState(false);
    } else {
      setTitleState(true);
    }
    if (descriptionInput == "" || descriptionInput == null) {
      setDescState(false);
    } else {
      setDescState(true);
    }
    if (
      descriptionInput !== "" &&
      titleInput !== "" &&
      descriptionInput !== null &&
      titleInput !== null
    ) {
      const confirmReq = confirm("You are going to post. Are you sure?");
      if (confirmReq == true) {
        alert("It was succesfully posted!");
        setDescState(true);
        setTitleState(true);
        setDescriptionInput("");
        setTitleInput("");
      }
    }
  };
  return (
    //   <UpperCaption>

    //     {/* const [titleInput, setTitleInput] = useState("");
    // const [descriptionInput, setDescriptionInput] = useState("");
    // const [titleState, setTitleState] = useState(true);
    // const [descState, setDescState] = useState(true);
    // const HandleTitleValue = (value) => {
    //   setTitleInput(value);
    // };
    // const HandleDescriptionValue = (value) => {
    //   setDescriptionInput(value);
    // };
    // const ClickedDone = () => {
    //   if (titleInput == "") {
    //     setTitleState(false);
    //   } else {
    //     setTitleState(true);
    //   }
    //   if (descriptionInput == "") {
    //     setDescState(false);
    //   } else {
    //     setDescState(true);
    //   }
    //   if (descriptionInput !== "" && titleInput !== "") {
    //     const confirmReq = confirm("You are going to post. Are you sure?");

    //     if (confirmReq == true) {
    //       alert("It was succesfully posted!");
    //       setDescriptionInput("");
    //       setTitleInput("");
    //     }
    //   }
    // }; */}
    //     {/* <div className="HTML">
    //       <div className="INNER-PART">
    //         <h1 className="WHITE">Title</h1>

    //         <input
    //           className="Input"
    //           placeholder="Title..."
    //           value={titleInput}
    //           onChange={(e) => HandleTitleValue(e.target.value)}
    //         ></input>
    //         {titleState !== false ? (
    //           console.log(titleState)
    //         ) : (
    //           <div className="WHITE">Please Type Someting!!</div>
    //         )}
    //         <h1 className="WHITE">Description</h1>

    //         <input
    //           className="Input"
    //           placeholder="Description..."
    //           value={descriptionInput}
    //           onChange={(e) => HandleDescriptionValue(e.target.value)}
    //         ></input>
    //         {descState !== false ? (
    //           console.log(descState)
    //         ) : (
    //           <div className="WHITE">Please Type Someting!!</div>
    //         )}
    //         <button className="BUTTON" onClick={() => ClickedDone()}>
    //           DONE
    //         </button>
    //       </div>
    //     </div> */}

    //   </UpperCaption>
    <UpperCaption>
      <div className="HTML">
        <div className="INNER-PART">
          <h1 className="WHITE">Title</h1>

          <input
            className="Input"
            placeholder="Title..."
            value={titleInput}
            onChange={(e) => HandleTitleValue(e.target.value)}
          ></input>
          {titleState !== false ? (
            console.log(titleState)
          ) : (
            <div className="RED">Please Type Someting!!</div>
          )}
          <h1 className="WHITE">Description</h1>

          <input
            className="Input"
            placeholder="Description..."
            value={descriptionInput}
            onChange={(e) => HandleDescriptionValue(e.target.value)}
          ></input>
          {descState !== false ? (
            console.log(descState)
          ) : (
            <div className="RED">Please Type Someting!!</div>
          )}
          <button className="BUTTON" onClick={() => ClickedDone()}>
            DONE
          </button>
        </div>
      </div>
    </UpperCaption>
  );
};
export default Page;
