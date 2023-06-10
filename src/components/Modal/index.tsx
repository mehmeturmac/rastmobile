import { useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './index.module.css';

// Context
import { MainContext } from '../../context/mainContext';
import { MainContextType, IData } from '../../context/@types.main';

// Assets
import close from '../../assets/close.svg';

export default function Modal() {
  const { setStatus, saveData } = useContext(MainContext) as MainContextType;

  const [formData, setFormData] = useState<IData>({ id: '', socialLink: '', socialName: '', description: '' });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.socialLink === '' || formData.socialName === '' || formData.description === '') {
      alert('Lütfen tüm kutuları doldurun!');
    } else {
      saveData({ ...formData, id: nanoid() });
      setStatus(false);
    }
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <span className={styles.close} onClick={() => setStatus(false)}>
          <img src={close} alt="close" />
        </span>
        <div>
          Sosyal Medya Linki
          <input type="text" onChange={(e: any) => setFormData({ ...formData, socialLink: e.target.value })} />
        </div>
        <div>
          Sosyal Medya Adı
          <input type="text" onChange={(e: any) => setFormData({ ...formData, socialName: e.target.value })} />
        </div>
        <div>
          Açıklama
          <input type="text" onChange={(e: any) => setFormData({ ...formData, description: e.target.value })} />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.cancel} onClick={() => setStatus(false)}>
            Vazgeç
          </button>
          <button className={styles.submit} onClick={handleSubmit}>
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
