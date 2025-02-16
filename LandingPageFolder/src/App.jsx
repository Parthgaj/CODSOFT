import Card from './Card.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
function App() {
  
 return(
      <> 
       <Header/>
         <div className='Services-container' id='ServicesSeciton'>
               <h1 id='Service-heading' className='.Heading_font'>Services</h1>
                  <Card imgsrc="src/assets/illus.jpeg" heading="Custom Illustration" desc="custom detailed artwork to stylized drawings, bring your ideas to life with custom illustrations that match your vision and style. Ideal for books, posters, and digital media."/>
                  <Card imgsrc="src/assets/mascot.jpg" heading="Mascot design" desc="Get a unique and eye-catching mascot tailored to your brand or project. Perfect for businesses, streamers, and sports teams looking for a memorable character."/>
                  <Card imgsrc="src/assets/LogoDesign.webp" heading="Logo Design" desc="Your logo is the foundation of your brand identity. We create unique, high-quality logos that reflect your brand’s personality and leave a lasting impression. Whether you need a minimalist, modern, or illustrative logo"/>
                  <Card imgsrc="src/assets/conceptArt.jpg" heading="Concept Art" desc="Bring your ideas to life with stunning concept art. Whether it's for characters, environments, or creatures, our artists create visually compelling designs that capture the essence of your vision."/>   
               <button id='MoreButton'>Know More</button>
        </div>
        <div id='footerSection'>
           <Footer />
        </div>
        
      </>
  
 ); 
}
export default App
