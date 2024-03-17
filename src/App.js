import React from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import Auth from './components/Auth'
import { useSelector } from 'react-redux'

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className={styles.App}>
      <header>
        <Header/>
      </header>
      <body>
        {!isAuth &&  <Auth/>}
        {isAuth && <>
        <UserProfile/>
        <Counter/>
        </>
        }
      </body>
    </div>
  )
}

export default App