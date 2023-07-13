import React from 'react'
import './App.css'

const App = () => {
  const [ isDark, setIsDark ] = React.useState(false);
  const toggleDark = React.useCallback(()=>{
    setIsDark(!isDark)
  }, [isDark])
  return (
    <div id='content' style={{
        color: isDark? 'white':'black',
        backgroundColor: isDark? 'black':'rgb(214, 214, 214)'
      }}>
      <h1 onClick={toggleDark}>나는 신발이 없음을 한탄했는데, <br /> 길에서 발이 없는 사람을 만났다.</h1>
    </div>
  )
}
export default App;