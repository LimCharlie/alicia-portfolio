import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
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
          <div>
            Test
          </div>
        </div>
      </div>
    </section>
  );
}
