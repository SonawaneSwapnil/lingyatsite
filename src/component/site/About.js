import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function About() {

  let navigate = useNavigate();

  var isLoggedin = localStorage.getItem("USERID");

  return (
    <div>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h4 className="title">About us</h4>
            <ul className="breadcrumb-list">
              <li><Link to="/">Home</Link></li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}
      {/* <!-- ==========Start-about-Section========== --> */}
      <section className="about-section mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="img"><img src="assets/images/about/sant.jpeg" alt="" /></div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title">Get to Know More</h6>
                  <h2 className="title">About us</h2>
                  <p className='justify-both-side'>
                    महात्मा बसवेश्वर महाराज    हे कर्नाटकातील संत, समाजसुधारक होते. त्यांनी  जातिव्यवस्थेविरुद्ध व अन्य हानिकारक प्रथांविरुद्ध संघर्ष केला. त्यांनी निर्गुण, निराकार एकेश्वरवादी श्रद्धेचा पुरस्कार केला.
                    <br />
                    त्यांचा जन्म वैशाखातील अक्षय्य तृतीयेला झाल्याचे मानले जाते.
                    भारतीय लोकशाही संसदेची स्थापना “लोकशाही संसद म्हणजेच ‘अनुभव मंटपाची’ स्थापना केली. या संस्थेत प्रवेश घेण्यास कोणासही बंदी नव्हती. स्त्रियांनासुद्धा संस्थेचे सभासद
                    होता येत होते. जातीभेदाला तर थाराही नव्हता.
                    <br />
                    या अनुभव मंटपात सर्व धर्मातील लोक एकत्र येऊन सामाजिक अडचणींवर कशी मात करावी यावर चर्चा करण्याचे कार्य चालत असे. बसवण्णांनी समाजातील रूढीपरंपरा, वाईट चालीरीती यांना विरोध करून समाजाच्या हितकारक गोष्टींची अंमलबजावणी करणारी नवीन यंत्रणा तयार केली.( बाराव्या शतकातील आदर्श प्रशासक ,समतेचे प्रणेते म्हणून महात्मा बसवेश्वरांना ओळखले जाते.सर्व प्रथम लोकशाही मूल्याची सुरूवात ही म.बसवेश्वरांनी 12 व्या शतकात अनूभव मंटपाच्या माध्यमातून केल्याचे वचनसाहित्यातून दिसून येते.एकूणच त्यांनी वचनसाहित्यात समता, मूल्य, न्याय, बंधूता,
                    एकात्मता तसेच स्वातंत्र्य, अधिकार, नियंत्रण व शिस्त, सूशासन आणि प्रशासन आदी बाबींवर सखोल विवेचन केले आहेत.
                  </p>
                </div>
              </div>
            </div>
            <p className='justify-both-side px-3'>
              प्रत्येकाने आपल्या पोटापाण्याचा व्यवसाय करतानाच प्रामाणिक व आध्यात्मिक जीवन जगायला मार्गदर्शक ठरतील अशी तत्त्वे बसवेश्वरांनी समाजाला दिली.
              मनापासून केलेले प्रत्येक काम हीच खरी शिव उपासना हे त्यांच्या कायक वे कैलास सिद्धांताचे सार होय. शारीरिक श्रम वा व्यवसाय हाच स्वर्ग (कैलास) आहे. कोणत्याही प्रकारचे शारीरिक श्रम हे हीन दर्जाचे नाहीत, असे सांगून त्यांनी श्रमप्रतिष्ठा वाढविली. कायक हे केवळ पैशासाठी सांगितलेले नाही. तसेच ते कर्मसिद्धांतावर आधारलेले नसून त्यात व्यक्तीला व्यवसायस्वातंत्र्य देण्यात आलेले आहे.
              <br />
              श्रमप्रतिष्ठेबरोबरच गरजेनुसार संपत्तीची विभागणी करावी, ही विचारसरणी (दासोह ) मांडल्यामुळे बसवेश्र्वरांची वृत्ती समाजवादी, समतावादी होती, असे दिसून येते. दासोह सिद्धांतात आपण कमावलेले धन केवळ स्वतः पूरते न वापरता त्याचा समाजासाठी उपयोग करण्याची संकल्पना त्यांनी मांडली.
              बसवेश्वरांच्या काळात समाजव्यवस्थेत स्त्रीला शुद्र, बहिष्कृत समजले जात असे. स्त्रीयांवर अन्याय होत होता, म्हणून त्यांनी स्त्रियांसाठी मोठे भरीव कार्य केले. स्त्रियांना मत स्वातंत्र्याचा अधिकार दिला. त्यांना धार्मिक आणि आध्यात्मिक हक्क दिले. स्त्रियांची अशुद्धतेच्या कल्पनेतून आणि पंचसुतका पासून सुटका केली.
              <br />
              <br />
              आज परिस्थिति अशी आहे की लिंगायत धर्माचा मूळ उद्देश आणि बसवण्णांची शिकवण काय आहे हे लोकांना माहीत नाही.
              <br />
              कांही लिंगायत हे पूर्णपणे अंधश्रद्धेच्या वर्चस्वाखाली असून राशीभविष्य/ जन्म कुंडली पाहतात  व कर्मकांड, देव, व्रतवैकल्य, भविष्यवाणी, यज्ञ, अंधश्रद्धा, आत्मा अशा चाकोरीत गुंतलेले आहेत.
              <br />
              वेद, पुराण, स्वर्ग, देव देवता, आत्मा, पुनर्जन्म, यज्ञ, वैकल्य ही थोतांडे नाकारली आणि सर्व व्यवसायातील/ जातीतील लोकांना सोबत घेऊन लिंगायत धर्माची स्थापना केली.
              इ.स. 1167 मध्ये वयाच्या 66 व्या वर्षी ते संगमेश्वराशी एकरुप झाले.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- ==========Start-about-Section========== --> */}
      {/* <!-- ==========Join-now-Section========== --> */}
      <div className="join-now-section">
        <img className="shape1" src="assets/images/join/heartshape.png" alt="" />
        <img className="shape2 pb-lg-5 mb-lg-4" src="assets/images/join/img.png" alt="" />
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
                <Link to={isLoggedin ? '/profile' : '/login'} className="custom-button">Join Now !</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==========Join-now-Section========== --> */}
      {/* <!-- ==========How it work Section========== --> */}
      <section className="how-it-work-section">
        <img className="shape1" src="assets/images/h-it-w/circle-shape.png" alt="" />
        <img className="shape2" src="assets/images/h-it-w/bird.png" alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">Meet New People Today!</h6>
                  <h2 className="title wow fadeInUp">How Does It Work?</h2>
                  <p className="text wow fadeInUp">You’re just 3 steps away from a great date</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-work-box wow fadeInUp" data-wow-delay="0.1s">
                <div className="icon">
                  <img src="assets/images/h-it-w/icon1.png" alt="" />
                  <div className="number">01</div>
                </div>
                <h4 className="title">Tell us who you are!</h4>
                {/* <Link to='/login' className='custom-button'>Join Now !</Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon">
                  <img src="assets/images/h-it-w/icon2.png" alt="" />
                  <div className="number">02</div>
                </div>
                <h4 className="title">Find the right person</h4>
                {/* <Link to='/login' className='custom-button'>Join Now !</Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-box wow fadeInUp" data-wow-delay="0.3s">
                <div className="icon">
                  <img src="assets/images/h-it-w/icon3.png" alt="" />
                  <div className="number">03</div>
                </div>
                <h4 className="title">Get Connect/Contact</h4>
                {/* <Link to='/login' className='custom-button'>Join Now !</Link> */}
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <Link to={isLoggedin ? "/profile" : "/login"} className="custom-button" >
                Join Now !
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==========How it work Section==========  */}
    </div>
  )
}
