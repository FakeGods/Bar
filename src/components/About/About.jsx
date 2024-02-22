import Pop from '../../assets/pop_smoke.png';

function About () {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-content">
                    <img src={Pop} className='Pop' />
                        <div className="text-main">                          
                            <h3>
                                About me
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;