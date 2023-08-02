import React from "react";

const stats = () => {
  return (
    <div
      style={{
        height: "60vh",
        backgroundColor: "#727272",
        paddingTop: "40px",
        color: "white",
      }}
    >
      <h5>خدمات طبية احترافية</h5>
      <br />
      <h1>طوال الطريق</h1>
      <div
        style={{
          marginTop: "80px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          fontSize: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>4800</div>
          <div>حالات ناجحة</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>41</div>
          <div> جائزة</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>12</div>
          <div> عام معك</div>
        </div>
      </div>
    </div>
  );
};

export default stats;
