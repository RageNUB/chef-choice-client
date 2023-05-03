import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/italian-pasta-shells-with-mushrooms-zucchini-tomato-sauce_2829-10882.jpg?w=1380&t=st=1683103281~exp=1683103881~hmac=ebbf7ab515b366343177aeddf69c122a7dd66b78e6d64ff34490daa52e727d0a"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h1 className="text-5xl font-bold text-secondary">Welcome To</h1>
              <h1 className="text-8xl font-bold text-primary">Chef Choice</h1>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-meat-tomatoes-decorated-with-pea-sprouts-dark-table_2829-19421.jpg?w=1380"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h1 className="text-5xl font-bold text-secondary">Welcome To</h1>
              <h1 className="text-8xl font-bold text-primary">Chef Choice</h1>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-table-dinner-top-view-slow-food-concept_2829-12758.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h1 className="text-5xl font-bold text-secondary">Welcome To</h1>
              <h1 className="text-8xl font-bold text-primary">Chef Choice</h1>
            </div>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food-banner-top-view_2829-14415.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h1 className="text-5xl font-bold text-secondary">Welcome To</h1>
              <h1 className="text-8xl font-bold text-primary">Chef Choice</h1>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
