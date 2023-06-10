import styles from './index.module.css';

// Assets
import close from '../../assets/close.svg';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <span className={styles.close}>
          <img src={close} alt="close" />
        </span>
        <div>
          Sosyal Medya Linki
          <input type="text" />
        </div>
        <div>
          Sosyal Medya Adı
          <input type="text" />
        </div>
        <div>
          Açıklama
          <input type="text" />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.cancel}>Vazgeç</button>
          <button className={styles.submit}>Kaydet</button>
        </div>
      </form>
    </div>
  );
}
