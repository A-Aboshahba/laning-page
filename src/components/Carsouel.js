import Carousel from "react-bootstrap/Carousel";
export function CarouselSlider({ data }) {
  return (
    <Carousel data-bs-theme="light" controls={false} touch={true}>
      <Carousel.Item>
        <CarouselInnerItem content={data[0]}></CarouselInnerItem>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselInnerItem content={data[1]}></CarouselInnerItem>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselInnerItem content={data[2]}></CarouselInnerItem>
      </Carousel.Item>
    </Carousel>
  );
}

export const CarouselInnerItem = ({ content }) => {
  const styles = {
    backgroundImage: `url(./${content.imagePath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
  };
  return (
    <div className="d-block w-100 extra-bold" style={styles}>
      <div
        style={{ paddingTop: "100px", paddingLeft: "20px", fontSize: "2.4vw" }}
        className=" w-50  text-start font-weight-bold"
      >
        <span style={{ color: "blue" }}>{content.start}</span> {content.desc}
      </div>
    </div>
  );
};
