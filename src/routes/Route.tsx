import React from 'react'
import { useEffect, useState } from 'react'
import AppwriteContext from '../appwrite/AppwriteContext'
import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import Loading from '../component/Loading'
import AppwriteProvider from '../appwrite/AppwriteProvider'
import databaseProvider from '../appwrite/DatabaseProvider'
import DatabaseProvider from '../appwrite/DatabaseProvider'
const Route = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext)
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((response) => {
        setIsLoading(false)
        if (response) {
          setIsLoggedIn(true)
        }
      })
      .catch((error) => {
        setIsLoggedIn(false)
        setIsLoading(false)
      })


  }, [appwrite, setIsLoggedIn])
  if (isLoading) { return <Loading /> }
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
      
    
  )
}
export default Route