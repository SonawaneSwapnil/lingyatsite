import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
  };

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  var ageFilter = range(18, 65);

  return (
    <div>
      {/* <!-- ==========Banner-Section========== --> */}
      <div className='banner-section'>
        <img className='img1 wow fadeInLeft' src='assets/images/banner/aimg1.png' alt='' />
        {/* <img className='img2 wow fadeInRight' src='assets/images/banner/aimg2.png' alt='' /> */}
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 col-lg-5'>
              <h3 className='main-title wow fadeInLeft'>
                Find Your Best Life Partner
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='join-now-box wow fadeInUp'>

                  <div className='single-option'>
                    <label className='title col-4'>I am a :</label>
                    <div className='option col-8'>
                      <div className='s-input'>
                        <input type='radio' name='gender' id='male' /><label htmlFor='male'>Male</label>
                      </div>
                      <div className='s-input ml-5'>
                        <input type='radio' name='gender' id='female' /><label htmlFor='female'>Female</label>
                      </div>
                    </div>
                  </div>

                  <div className='single-option gender'>
                    <label className='title col-4'>Seeking a :</label>
                    <div className='option col-8'>
                      <div className='s-input'>
                        <input type='radio' name='seeking' id='males' /><label htmlFor='males'>Male</label>
                      </div>
                      <div className='s-input ml-5'>
                        <input type='radio' name='seeking' id='females' /><label htmlFor='females'>Female</label>
                      </div>
                    </div>
                  </div>

                  <div className='single-option age'>
                    <label className='title col-4'>Ages :</label>
                    <div className='option col-8'>
                      <div className='s-input'>
                        <select className='select-bar'>
                          {ageFilter.map((item, index) => {
                            return <option key={index}>{item}</option>
                          })}
                        </select>
                      </div>
                      <div className='separator ml-4 mr-4'>-</div>
                      <div className='s-input'>
                        <select className='select-bar'>
                          {ageFilter.map((item, index) => {
                            return <option key={index}>{item}</option>
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className='container-fluid single-option'>
                    <div className='row'>
                      <label className='title col-lg-5'>WorkPlace [City]:</label>
                      <input
                        {...register('work', {
                          required: 'Enter Your WorkPlace [City]:',
                        })}
                        type='text'
                        className='my-form-control col-lg-6'
                        id='exampleInputincome' />
                      {errors.work && (
                        <span style={{ color: 'red' }}>{errors.work.message}</span>
                      )}
                    </div>
                  </div>

                  <div className='container-fluid single-option'>
                    <div className='row'>
                      <label htmlFor='inputincome' className='title col-lg-5'>Income/उत्पन्न:</label>
                      <input
                        {...register('income', {
                          required: 'Enter Your Income/उत्पन्न',
                        })}
                        type='number'
                        className='my-form-control col-lg-6'
                        id='exampleInputincome' />
                      {errors.income && (
                        <span style={{ color: 'red' }}>{errors.income.message}</span>
                      )}
                    </div>
                  </div>

                  <div className='container-fluid single-option last'>
                    <div className='row'>
                      <label htmlFor='exampleInputedu' className='title col-lg-5'>Qualification/शैक्षणिक पात्रता:</label>
                      <input
                        {...register('edu', {
                          required:
                            'Enter Your Educational Qualification/शैक्षणिक पात्रता',
                        })}
                        type='text'
                        className='my-form-control col-lg-6'
                        id='exampleInputedu' />
                      {errors.edu && (
                        <span style={{ color: 'red' }}>{errors.edu.message}</span>
                      )}
                    </div>
                  </div>

                  <div className='join-button'>
                    <Link to='login'><button className='custom-button'>Find Your Perfect Partner</button></Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==========Banner-Section========== -->

    <!-- ==========Feature-Section========== --> */}
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
