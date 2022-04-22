function Footer() {
    return ( 
        <div class="bg-dark m-3">
            <div style={{margin:"10px"}}>
                <h6 style={{padding:'10px',color:'white'}}>
                    © {new Date().getFullYear()} Copyright: News-Prediction
                </h6>
            </div>
        </div>
     );
}

export default Footer;