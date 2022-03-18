function Contact() {
    return ( 
        <div class='m-3'>
            <div class="about-section d-flex justify-content-center">
                <div class="inner-container">
                    <h1 class="abouth1">Contact Us</h1>
                    <div class="m-3">
                        <img src={process.env.PUBLIC_URL+"ddu.png"} alt="College Logo" style={{width:"200px"}}/>
                    </div>
                    <p class="text" style={{color:'black', fontSize:'30px', textAlign:'center'}}>
                        <b>Dharmsinh Desai University, Nadiad</b>
                    </p>
                    <p class="text" style={{color:'grey', fontSize:'20px', textAlign:'center'}}>
                        College Rd, Chalali, Nadiad, Gujarat 387001
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;