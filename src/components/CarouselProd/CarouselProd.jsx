import styles from './CarouselProd.module.css'
import { useRef } from 'react'
import CardProduto from '../../components/CardProduto/CardProduto';
import { useState, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import promotion from '../../assets/data/promotionData'
import bebidasData from '../../assets/data/bebidasData'

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';


function CarouselProd() {

    const [slidesPerView, setSlidePerView] = useState(4)


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(1);
            }
        }

        handleResize();
    }, [])

    return (
        <section id='container'>
            <Swiper
                // controla quantos slides por foto quero que apareça
                slidesPerView={slidesPerView}
                // define se é clicavel ou não
                navigation>

                {/* corresponde a cada item do coarrossel */}
                <SwiperSlide>
                    <div className={styles.carousel_prod}>
                        {promotion.map(({ id, img, name, price, dateVenc, discount, qtdUnit }) => (
                            <CardProduto key={id}
                                img={img}
                                name={name}
                                price={price}
                                discount={discount}
                                dateVenc={dateVenc}
                                qtdUnit={qtdUnit}
                            />
                        ))}
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.carousel_prod}>
                       
                         {bebidasData.map(({ id, img, name, price, dateVenc, discount, qtdUnit }) => (
                            <CardProduto key={id}
                                img={img}
                                name={name}
                                price={price}
                                discount={discount}
                                dateVenc={dateVenc}
                                qtdUnit={qtdUnit}
                            />
                        ))}
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default CarouselProd;