import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
         

         {/* <!-- ==========Breadcrumb-Section========== --> */}
    <section className="breadcrumb-area profile-bc-area">
        <div className="container">
            <div className="content">
                <h2 className="title">about us</h2>
                <ul className="breadcrumb-list">
                    <li>
                        <Link to="">
                            Home
                        </Link>
                    </li>
                    <li>
                        about us
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- ==========Breadcrumb-Section========== --> */}
        {/* <!-- ==========Start-Flirting-Section========== --> */}
    <section className="flirting-section about-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="img">
                        <img src="assets/images/about/sant.jpeg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="content">
                        <div className="section-header">
                            <h6 className="sub-title">
                                Get to Know More
                            </h6>
                            <h2 className="title">
                                About us
                            </h2>
                            <p>
                            लिंगायत हा एक स्वतंत्र परिपूर्ण धर्म आहे. लिंगायात धर्मातील जन्मपासून ते मृत्यू पर्यंत सर्व संस्कार हे हिंदू धर्मातील संस्कारापेक्षा पूर्णपणे वेगळे आहेत आणि हे लिंगायत धर्म संस्थापक जगतज्योती महात्मा बसवेश्वर हे लिंगायतांचे थोर पुढारी होते. त्यांनी लिंगायत परंपरा तळागाळातील लोकांपर्यंत पोहचवली
                            </p>
                            <br/>
                            <p className="mb-0">
                            विशिष्ट असा सिद्धां, साधना आणि धर्मगुरू एकादशसृत्र असलेला एका गुरूला मूळ पुरूष म्हाणून स्वीकारलेला तो सुधारणा धर्म होय. एका गुरूपासून प्रारंभ न होता नैसर्गिकरित्या वाढत असलेला नैसर्गिक धर्म, नैसर्गिक धर्मात प्रत्येक सिंद्धत असतात. त्यात मरीआई म्हाळ्साईच्या पूजैपासून ते ’अहं ब्रम्हास्मि सारख्या सुक्ष्म सिद्धंतापर्यत त्यात वाव आहे. सुधरणा धर्मात याला वाव मिळत नाही-त्यात एक प्रकाराचा सिद्धांत, एक प्रकारचे दर्शन आहे. असा सुधारणात्मक धर्म दिलेला महापुरूष म्हणजेच विश्वगुरू बसवेश्वर होत
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Start-Flirting-Section========== --> */}
    {/* <!-- ==========Join-now-Section========== --> */}
    <div className="join-now-section">
        <img className="shape1" src="assets/images/join/heartshape.png" alt=""/>
        <img className="shape2" src="assets/images/join/img.png" alt=""/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="section-header white-color">
                            <h2 className="title">
                                Best Ways to Find Your
                                True Sole Mate
                            </h2>
                        </div>

                        <Link to="#" className="custom-button">Join Now !</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ==========Join-now-Section========== --> */}
    {/* <!-- ==========How it work Section========== --> */}
    <section className="how-it-work-section">
        <img className="shape1" src="assets/images/h-it-w/circle-shape.png" alt=""/>
        <img className="shape2" src="assets/images/h-it-w/bird.png" alt=""/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="content">
                        <div className="section-header">
                            <h6 className="sub-title extra-padding wow fadeInUp">
                                Meet New People Today!
                            </h6>
                            <h2 className="title wow fadeInUp">
                                How Does It Work?
                            </h2>
                            <p className="text wow fadeInUp">
                                You’re just 3 steps away from a great date
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.1s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon1.png" alt=""/>
                            <div className="number">
                                01
                            </div>
                        </div>
                        <h4 className="title">
                            Tell us who you are!
                        </h4>
                        <Link to="#" className="custom-button">Join Now !</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon2.png" alt=""/>
                            <div className="number">
                                02
                            </div>
                        </div>
                        <h4 className="title">
                            Find the right person
                        </h4>
                        <Link to="#" className="custom-button">Join Now !</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-work-box wow fadeInUp" data-wow-delay="0.3s">
                        <div className="icon">
                            <img src="assets/images/h-it-w/icon3.png" alt=""/>
                            <div className="number">
                                03
                            </div>
                        </div>
                        <h4 className="title">
                            Get Connect/Contact
                        </h4>
                        <Link to="#" className="custom-button">Join Now !</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========How it work Section==========  */}
    </div>

  )
}
