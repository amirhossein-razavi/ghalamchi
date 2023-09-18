import React from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

const Loader = ({ loader }) => {
  const { loading } = useSelector((state) => ({
    loading: state.loading.loading,
  }));

  return (
    loader || loading ? (
      <div className={styles.loadingContainer}>
        <Spin className="customSpin" spinning size="large" />
      </div>
    ) : <div />
  );
};

export default Loader;
