import React from 'react'
import styles from './Search.module.css';
import {ReactComponent as SearchIcon} from '../../assets/Search icon.svg';


function Search({placeholder}) {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmit} className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} required/>
        <button className={styles.searchButton} type='submit'>
             <SearchIcon />
        </button>
    </form>
  )
}

export default Search;