import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  var ageFilter = range(18, 65);

  return (
    <div>
      {/* <!-- ==========Banner-Section========== --> */}
      <div className='banner-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6'>
              <h3 className='main-title wow fadeInLeft'>
                Find Your Best Life Partner
              </h3>
            </div>
            <div className='col-lg-6'>
              <img src='assets/images/banner/aimg1.png' alt='' />
              {/* <img className='img2 wow fadeInRight' src='assets/images/banner/aimg2.png' alt='' /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==========Banner-Section========== --> */}

      {/* <!-- ==========Filter-Section========== --> */}

      <div class="container" style={{ 'backgroundColor': 'rgb(158, 0, 53)', 'padding': 50, 'borderRadius': 16 }}>
        <form class="row gx-3 gy-2 align-items-center">
          <div class="col-sm-2">
            <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">Looking for:</label>
            <div class="form-check">
              <div className='row p-0 m-0'>
                <div class="col-8">
                  <label class="form-check-label text-light title" for="flexRadioDefault1">Groom</label>
                </div>
                <div class="col-4">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                </div>
              </div>
            </div>
            <div class="form-check">
              <div className='row p-0 m-0'>
                <div class="col-8">
                  <label class="form-check-label text-light title" for="flexRadioDefault2">Bride</label>
                </div>
                <div class="col-4">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <label class="visually-hidden text-light title" for="specificSizeSelect">Age Preference:</label>
            <select class="form-select ddown" id="specificSizeSelect">
              <option selected>Choose...</option>
              <option value="1">18-20</option>
              <option value="2">21-25</option>
              <option value="3">26-30</option>
              <option value="1">31-35</option>
              <option value="2">36-40</option>
              <option value="3">41-45</option>
            </select>
          </div>
          <div class="col-sm-2">
            <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">WorkPlace:</label>
            <div class="input-group">
              <div class="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                </svg>
              </div>
              <input type="text" class="form-control" id="specificSizeInputGroupUsername" />
            </div>
          </div>
          <div class="col-sm-2">
            <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">Income:</label>
            <div class="input-group">
              <div class="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
                  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                </svg>
              </div>
              <input type="text" class="form-control" id="specificSizeInputGroupUsername" />
            </div>
          </div>
          <div class="col-sm-2">
            <label class="visually-hidden text-light title" for="specificSizeInputGroupUsername">Marital Status:</label>
            <div class="input-group">
              <select class="form-select ddown" id="specificSizeSelect">
                <option selected>Choose...</option>
                <option class="textTru chosenDropWid" id="N" value="N">Never Married</option>
                <option class="textTru chosenDropWid" id="S" value="S">Awaiting Divorce</option>
                <option class="textTru chosenDropWid" id="D" value="D">Divorced</option>
                <option class="textTru chosenDropWid" id="W" value="W">Widowed</option>
                <option class="textTru chosenDropWid" id="A" value="A">Annulled</option>
              </select>
            </div>
          </div>
          <div class="col-sm-2">
            <button type="submit" class="custom-button" onClick={() => navigate("/login")}>Search</button>
          </div>
        </form>
      </div>

      {/* <!-- ==========Filter-Section========== --> */}

      {/* <!-- ==========Feature-Section========== --> */}
      <section className='feature-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-feature wow fadeInUp' data-wow-delay='0.1s'>
                <div className='icon'>
                  <img src='assets/images/feature/icon01.png' alt='' />
                </div>
                <h4>100% Verified</h4>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-feature wow fadeInUp' data-wow-delay='0.2s'>
                <div className='icon'>
                  <img src='assets/images/feature/icon02.png' alt='' />
                </div>
                <h4>Most Secure</h4>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-feature wow fadeInUp' data-wow-delay='0.3s'>
                <div className='icon'>
                  <img src='assets/images/feature/icon03.png' alt='' />
                </div>
                <h4>100% Privacy</h4>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-feature wow fadeInUp' data-wow-delay='0.4s'>
                <div className='icon'>
                  <img src='assets/images/feature/icon04.png' alt='' />
                </div>
                <h4>Smart Matching</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==========How it work Section========== --> */}
      <section className='how-it-work-section'>
        <img className='shape1' src='assets/images/h-it-w/circle-shape.png' alt='' />
        <img className='shape2' src='assets/images/h-it-w/bird.png' alt='' />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='content'>
                <div className='section-header'>
                  <h6 className='sub-title extra-padding wow fadeInUp'>
                    Meet New People Today!
                  </h6>
                  <h2 className='title wow fadeInUp'>
                    How Does It Work?
                  </h2>
                  <p className='text wow fadeInUp'>
                    You’re just 3 steps away from a great date
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-work-box wow fadeInUp' data-wow-delay='0.1s'>
                <div className='icon'>
                  <img src='assets/images/h-it-w/icon1.png' alt='' />
                  <div className='number'>01</div>
                </div>
                <h4 className='title'>Tell us who you are!</h4>
                <Link to='#' className='custom-button'>Join Now !</Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-work-box wow fadeInUp' data-wow-delay='0.2s'>
                <div className='icon'>
                  <img src='assets/images/h-it-w/icon2.png' alt='' />
                  <div className='number'>02</div>
                </div>
                <h4 className='title'>Find the right person</h4>
                <Link to='#' className='custom-button'>Join Now !</Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-work-box wow fadeInUp' data-wow-delay='0.3s'>
                <div className='icon'>
                  <img src='assets/images/h-it-w/icon3.png' alt='' />
                  <div className='number'>03</div>
                </div>
                <h4 className='title'>Get Connect/Contact</h4>
                <Link to='#' className='custom-button'>Join Now !</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==========How it work Section==========  */}
    </div>
  )
}