'use client'; // This is a client component
import { useState } from 'react';
import { DataGrid, Paging, Pager, Column } from 'devextreme-react/data-grid';
import styles from './index.module.css';

// Assets
import plus from '../../assets/plus.svg';

// sampleData
import sampleData from '../../data.json';

export default function DGrid() {
  const [data, setData] = useState<any>(sampleData);

  return (
    <div className={styles.dgrid}>
      <span className={styles.button}>
        <img src={plus} alt="+" />
        Yeni Hesap Ekle
      </span>
      <DataGrid dataSource={data} keyExpr="id" rowAlternationEnabled={true} showBorders={false}>
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} allowedPageSizes={10} showNavigationButtons={true} visible={true} />
        <Column dataField="socialLink" caption="Sosyal Medya Linki" />
        <Column dataField="socialName" caption="Sosyal Medya Adı" />
        <Column dataField="description" caption="Açıklama" />
      </DataGrid>
    </div>
  );
}
