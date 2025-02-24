
import { Link } from 'react-router-dom';
import styles from './MercadoCard.module.css'



 function MercadoCard({ img,name,  rate, andress }) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };
    return (
        <Link to="/marketproductpage" onClick={scrollToTop}>
            <div className={styles.marketCard}>
            <div className={styles.container_img}>
                  <img src={img} alt="Logo Mercado" className={styles.img} /> 
            </div>
            
            <div className={styles.mercado_info}>

                <h2 className={styles.title_card}>{name}</h2>
                <div className={styles.info}>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>{andress}</p>
                </div>
                <div className={styles.info}>
                    <p>{rate}</p>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <p>(123)</p>
                </div>
            </div>
            </div>
        </Link>
    )
}


export default MercadoCard;