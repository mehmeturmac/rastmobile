'use client'; // This is a client component
import { useContext } from 'react';
import { DataGrid, Paging, Pager, Column } from 'devextreme-react/data-grid';
import styles from './index.module.css';

// Context
import { MainContext } from '../../context/mainContext';
import { MainContextType } from '../../context/@types.main';

// Assets
import plus from '../../assets/plus.svg';
import search from '../../assets/search.svg';
import filter from '../../assets/filter.svg';

// Modal
import Modal from '../Modal';

export default function DGrid() {
  const { datas, status, setStatus } = useContext(MainContext) as MainContextType;

  return (
    <div className={styles.dgrid}>
      <div className={styles.controls}>
        <div className={styles.left}>
          <input type="text" className={styles.search} placeholder="Search objects..." />
          <span className={styles.searchButton}>
            <img src={search} alt="search" />
          </span>
          <span className={styles.filterButton}>
            <img src={filter} alt="filter" />
          </span>
        </div>
        <span className={styles.button} onClick={() => setStatus(true)}>
          <img src={plus} alt="plus" />
          Yeni Hesap Ekle
        </span>
      </div>
      <DataGrid dataSource={datas} keyExpr="id" rowAlternationEnabled={true} showBorders={false}>
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} allowedPageSizes={10} showNavigationButtons={true} visible={true} />
        <Column dataField="socialLink" caption="Sosyal Medya Linki" />
        <Column dataField="socialName" caption="Sosyal Medya Adı" />
        <Column dataField="description" caption="Açıklama" />
      </DataGrid>
      {status && <Modal />}
    </div>
  );
}
