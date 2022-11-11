import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
// import swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { SliderProducts } from "../../data/products";

function Slider(): JSX.Element {
	return (
		<div className="s-container">
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={3}
				spaceBetween={40}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				navigation={true}
				pagination={{ clickable: true }}
				className="mySwiper"
			>
				{SliderProducts.map((slide, i) => (
					<SwiperSlide key={i}>
						<div className="left-s">
							<div className="name">
								<span>{slide.name}</span>
								<span>{slide.detail}</span>
							</div>
							<span>{slide.price}$</span>
							<div>Shop now</div>
						</div>
						<img src={slide.img} alt={slide.name} className="img-p" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Slider;
