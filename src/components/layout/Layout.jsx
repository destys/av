
import Header from "./header/Header";
import Footer from "./footer/Footer";
import AppBar from "./appbar/AppBar";

import styles from "./Layout.module.scss";

export default function LayoutClient({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <AppBar />
    </div>
  );
}
