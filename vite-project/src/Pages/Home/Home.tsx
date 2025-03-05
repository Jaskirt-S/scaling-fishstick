import './Home.css'
function Home()
{
    return (
    <><div style={{margin:0}}>
      
      <section style={{ 
        width: "100%",
        display:'flex', 
        justifyContent:'center'
      }}>
        <img className='MImg'
          src="./src/Assets/School.jpg"
          alt=" school image"
          style={{
          alignContent:'center',
          borderRadius:15,
          marginTop:10,
          }}
        />
      </section>
      <div style={{display:'flex',justifyContent:'center'}}><h1>What we Belive In</h1></div>
      <section
      style={{
        display:'grid',
        marginLeft:20,
        gridTemplateColumns: "33% 33% 33%",
        gridTemplateRows: "200px 200px",
        rowGap:0
      }}>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
      </section>
      <div style={{display:'flex',justifyContent:'center'}}><h1>Events</h1></div>
      <section
      style={{
        display:'grid',
        marginLeft:20,
        gridTemplateColumns: "33% 33% 33%",
        gridTemplateRows: "200px 200px",
        rowGap:0
      }}>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
      </section>
      </div>
    </>)
}
export default Home;