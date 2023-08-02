import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

export function Info() {
  const info = [
    {
      header: "Customer reviews",
      body: " Many successful operations have been performed in Dr. Samir Gharaba’scenters and clinics, which is why we have become the best in the success rates of operations and surgeries in Egypt and the Middle East",
      end: "",
    },
    {
      header: "Latest technology and devices",
      body: " We are always keen to use the latest advanced surgical techniques and modern devices that help in carrying out advanced surgeries.",
      end: "We are proud to be the first center for rhinoplasty using ultrasound in Egypt.",
    },
    {
      header: "Medical care",
      body: " We take care of every detail, from the pre-operative examination to the surgical steps and close follow-up after surgery.",
      end: "An integrated team that provides excellent medical care to our patients according to the highest international quality standards.",
    },
  ];
  return (
    <Container>
      <Row>
        {info.map((data, index) => (
          <InfoCard data={data} index={index} key={index}></InfoCard>
        ))}
      </Row>
    </Container>
  );
}

export function InfoCard({ data, index }) {
  return (
    <div
      style={{
        backgroundColor: `${
          index == 0 ? "#0983ed" : index == 1 ? "#0993ed" : "#09a3ed"
        }`,
      }}
      className={`col-12 col-md-4 p-4 text-start  text-white`}
    >
      <p className="mb-2" style={{ fontSize: "18px", letterSpacing: "1" }}>
        {data.header}
      </p>
      <p className="mb-2" style={{ fontSize: "15px" }}>
        {data.body}
      </p>
      <p style={{ fontSize: "15px" }}>{data.end}</p>
    </div>
  );
}
