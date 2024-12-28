import '../Css/Header.css'
export const Header = () => {
  let customCSS = "code";
  const isLoginIn = true;
  const greet = isLoginIn ? <p> Welcome Back </p> : <p>Plese Log in.</p>
  return (
    <>
        <div className='nick'>Junior</div>
        <div className={customCSS}>
            25 + 20 = {25+20}
        </div>
        {greet}

    </>
  )
}
