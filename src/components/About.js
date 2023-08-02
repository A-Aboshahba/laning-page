import React from "react";

const About = () => {
  return (
    <div className="" style={{ height: "80vh", margin: "0" }}>
      <div className="div1">
        <div className="pt-5 ps-5">
          <h6 className="p-0 m-0 mb-2 fs-5 ">Samir Ghoraba, MD</h6>
          <span
            style={{
              height: "3px",
              width: "90px",
              backgroundColor: "blue",
              display: "block",
            }}
          ></span>

          <h2
            style={{
              fontWeight: "bolder",
              fontSize: "35px",
            }}
          >
            Consultant Plastic Surgeon
          </h2>

          <div
            style={{
              fontWeight: "bolder",
              width: "37vw",
              height: "16vh",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxLines: 4,
            }}
          >
            Dr.Ghoraba pursued an international training and fellowships in a
            couple of countries including UK, Turkey, and Italy. He was trained
            and worked with many renowned surgeons who are leading in the field
            of aesthetic surgery.
          </div>
          <br />
          <div
            style={{
              fontWeight: "bolder",
              width: "37vw",
              height: "16vh",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxLines: 4,
            }}
          >
            Dr.Ghoraba is one of the very few surgeons in Egypt and the middle
            east who specializes in Deep Plane Facelift, Rhinoplasty and
            Revision Rhinoplasty.Also, he performs 200-300 operation of body
            contouring a year.
          </div>
          <br />
          <div
            style={{
              fontWeight: "bolder",
              width: "37vw",
              height: "10vh",
              margin: "0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: 1.2,
              maxLines: 4,
            }}
          >
            Dr.Ghoraba is fully committed to achieving the best functional and
            cosmetic results possible for his patients.
          </div>
          <img style={{ width: "160px" }} src="./logo-png.png"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
