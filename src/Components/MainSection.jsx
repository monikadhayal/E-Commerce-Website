import React from "react";

const MainSection = () => {
  return (
    <>
      <div style={{ margin: "0", padding: "0", overflow: "hidden" }}>
        <div style={{ position: "relative" }}>
          <img
            src="https://images.pexels.com/photos/19287629/pexels-photo-19287629.jpeg"
            alt="Background"
            style={{
              height: "100vh",
              width: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <h5 style={{ fontSize: "3rem", fontWeight: "500" }} className="display-2 text-black ">
              New Season Arrivals
            </h5>
            <p style={{ fontSize: "1.5rem" }} className="d-none d-sm-block text-black">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
