 import App from "./App";
 function Header(){

    return(
        
    <div id="header">
    <div class="container">
        <nav id="navBar">
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#ServicesSeciton">Services</a></li>
                <li><a href="#footerSection">Contact</a></li>
                <li><a href="#footerSection">Sign In</a></li>
            </ul>
        </nav>
        <img src="src/assets/logo.png" alt="" id="logo"/>
        <h1 id="Header-Heading">Commission. <br/>
            Create. Inspire.</h1>
            <p>
                Bring your imagination to life with expert artists from around the world.<br/>
                Whether you need a logo, character design,<br/> or custom artwork, our talented
                <br/> creators are ready to craft something unique just for you.
            </p>
         <button>Get Started</button>   
    </div>
    </div>
    );
}
export default Header;