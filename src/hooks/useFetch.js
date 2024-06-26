import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setData(data)
        setLoading(false)
        setError(null)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
        setData(null)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
