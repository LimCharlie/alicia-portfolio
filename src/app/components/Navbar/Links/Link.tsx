import Link from "next/link"
import styles from "./Links.module.css"

const Links = () => {
  const urls = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Graphisme',
      path: '/graphics'
    },
    {
      title: 'Illustratrion',
      path: '/Illustration'
    },
    {
      title: 'Maquillage Artistique',
      path: '/maquillage'
    },
    {
      title: 'Contact',
      path: '/#contact'
    }
  ];

  return (
    <div className={`${styles.container} flex justify-center`}>
      {urls.map((url => (
        <Link className={styles.link} key={url.title} href={url.path}>{url.title}</Link>
      )))}
    </div>
  )
}

export default Links
