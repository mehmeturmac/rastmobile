'use client'; // This is a client component
import { useContext } from 'react';
import { DataGrid, Paging, Pager, Selection, Column } from 'devextreme-react/data-grid';
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
  const { filterData, filteredDatas, removeData, status, setStatus } = useContext(MainContext) as MainContextType;

  return (
    <div className={styles.dgrid}>
      <div className={styles.controls}>
        <div className={styles.left}>
          <div className={styles.searchBox}>
            <input type="text" className={styles.search} placeholder="Search objects..." onChange={(e: any) => filterData(e.target.value)} />
            <span className={styles.searchButton}>
              <img src={search} alt="search" />
            </span>
          </div>
          <span className={styles.filterButton}>
            <img src={filter} alt="filter" />
          </span>
        </div>
        <button className={styles.button} onClick={() => setStatus(true)}>
          <img src={plus} alt="plus" />
          Yeni Hesap Ekle
        </button>
      </div>
      <DataGrid
        dataSource={filteredDatas}
        keyExpr="id"
        rowAlternationEnabled={true}
        hoverStateEnabled={true}
        onRowClick={(e: any) => {
          if (window.confirm('Silinsin mi?')) removeData(e.data.id);
        }}
      >
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} allowedPageSizes={10} showNavigationButtons={true} visible={true} />
        <Selection mode="single" />
        <Column dataField="socialLink" caption="Sosyal Medya Linki" />
        <Column dataField="socialName" caption="Sosyal Medya Adı" />
        <Column dataField="description" caption="Açıklama" />
      </DataGrid>
      {status && <Modal />}
    </div>
  );
}
