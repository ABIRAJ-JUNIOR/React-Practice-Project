import '../Css/Header.css'
export const Header = () => {
  let customCSS = "code";
  const isLoginIn = true;
  const greet = isLoginIn ? <p> Welcome Back </p> : <p>Plese Log in.</p>

  const items = ["item1","item2","item3"]
  return (
    <>
        <div className='nick'>Junior</div>
        <div className={customCSS}>
            25 + 20 = {25+20}
        </div>
        {greet}
        <ul>
            {items.map((item , index) =>(<li key={index}>{item}</li>))}
        </ul>
    </>
  )
}
