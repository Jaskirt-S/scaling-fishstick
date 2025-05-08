import './Home.css'
import React from 'react';
function Home()
{
    return (
    <>
    <div style={{margin:0}}>
      
      <section style={{ width: "100%",display:'flex', justifyContent:'center'}}>
        <img className='MImg'src="./src/Assets/School.jpg"alt=" school image"/>
      </section>
      <div style={{display:'flex',justifyContent:'center'}}><h1>What we've been up to</h1></div>
      <section
      style={{
        display:'grid',
        marginLeft:20,
        gridTemplateColumns: "33% 33% 33%",
        gridTemplateRows: "200px 200px",
        rowGap:0
      }}>
        <div className='feature'><img className='imgg' src="https://res.cloudinary.com/dxvlyyazo/image/upload/v1745410679/WhatsApp_Image_2025-04-22_at_18.55.08_44255e68_wtnqpc.jpg" /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
        <div className='feature'><img className='imgg' /><h3>Sample text</h3></div>
      </section>
      <div style={{display:'flex',justifyContent:'center',marginBottom:"30px"}}><h1 className='why'>Why Choose Us??</h1></div>
      <section className='biggie'>
      
      <section className='bluey'>
        <div className='b2'>
        <div className='feature'><img className='imgg' src="./src/Assets/feas.jpeg"/><h3>Very Affordable Fees</h3></div>
        <div className='feature'><img className='imgg' src="./src/Assets/feee.jpeg"/><h3>Food provided free of cost</h3></div>
        <div className='feature'><img className='imgg' src="./src/Assets/books.jpeg"/><h3>Free Textbooks</h3></div>
        <div className='feature'><img className='imgg' src="./src/Assets/rel.jpeg" /><h3>Religious Teaching</h3></div>
        <div className='feature'><img className='imgg' src="./src/Assets/newteecher.png"/><h3>Experienced Staff</h3></div>
        <div className='feature'><img className='imgg' /><h3>Excellent Sports Faclities</h3></div>
        </div>
      </section>
      </section>
      
      </div>
    </>)
}
export default Home;