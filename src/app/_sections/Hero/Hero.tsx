import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const listOfTitles = ['Directrice Artistique', 'Graphiste', 'Illustratrice'];

  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.container_intro}>
          <Image
            src='/big_logo.png'
            alt='Alicia Lo Big logo'
            width={938}
            height={300}
          />
          <div className={`${styles.container_titles} mt-5`}>
            {listOfTitles.map((title, index) => (
              <h2 className={styles.title} key={index}>{title}</h2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
