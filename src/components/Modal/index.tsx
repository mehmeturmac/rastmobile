import { useContext } from 'react';
import styles from './index.module.css';

// Context
import { MainContext } from '../../context/mainContext';
import { MainContextType } from '../../context/@types.main';

// Assets
import close from '../../assets/close.svg';

export default function Modal() {
  const { setStatus } = useContext(MainContext) as MainContextType;

  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <span className={styles.close} onClick={() => setStatus(false)}>
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
          <button className={styles.cancel} onClick={() => setStatus(false)}>
            Vazgeç
          </button>
          <button className={styles.submit}>Kaydet</button>
        </div>
      </form>
    </div>
  );
}
