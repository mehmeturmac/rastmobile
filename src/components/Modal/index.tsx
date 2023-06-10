import styles from './index.module.css';

// Assets
import close from '../../assets/close.svg';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <form>
        <span>
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
        <button>Vazgeç</button>
        <button>Kaydet</button>
      </form>
    </div>
  );
}
