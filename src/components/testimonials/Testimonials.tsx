import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import styles from "./testimonials.module.scss";

function Testimonials() {
	return (
		<div className={styles.testimonials}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<span>Top Rated</span>
					<span>
						Seedily say has suitable disposal and boy. Exercise joy man children
						rejoiced
					</span>
				</div>
				<img src={Hero} alt="Hero" />
				<div className={styles.container}>
					<span>100k</span>
					<span>Happy Customers with us</span>
				</div>
			</div>
			<div className={styles.reviews}>Reviews</div>
			<div className={styles.carousel}>
				<Swiper
					// Default parameters
					slidesPerView={3}
					slidesPerGroup={1}
					spaceBetween={20}
					className={styles.tCarousal}
					// Responsive breakpoints
					breakpoints={{
						// when window width is >= 856px
						856: {
							slidesPerView: 3,
						},
						// when window width is >= 640px
						640: {
							slidesPerView: 2,
						},
						// when window width is >= 0px
						0: {
							slidesPerView: 1,
						},
					}}
				>
					{TestimonialsData.map((testimonial, i) => (
						<SwiperSlide key={i}>
							<div className={styles.testimonial}>
								<img src={testimonial.image} alt={testimonial.name} />
								<span>{testimonial.comment}</span>
								<hr />
								<span>{testimonial.name}</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Testimonials;
