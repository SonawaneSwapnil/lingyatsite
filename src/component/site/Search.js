import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'


export default function Search() {
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

      {/* <!-- ==========Breadcrumb-Section========== --> */}
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">
              Search
            </h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="index.html">
                  Home
                </Link>
              </li>

              <li>
                Search
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- ==========Breadcrumb-Section========== --> */}

      {/* <!-- ==========Community-Section========== --> */}
      <section className="community-section inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-filter">
                <div className="left">
                  <Link to="" data-toggle="modal" data-target="#exampleModalCenter">
                    <i className="fas fa-sliders-h"></i> Find Your Perfect Partner
                  </Link>
                </div>
                {/* <div className="right">
                            <span className="span">
                                Order By :
                            </span>
                            <div className="filter-right">
                                <select className="nice-select select-bar">
                                    <option value="">Latest Active</option>
                                    <option value="">NEW</option>
                                    <option value="">OLD</option>
                                    <option value="">POPULAR</option>
                                </select>
                            </div>
                        </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend1.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Erma Porter
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend2.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Brad Barber
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend3.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Vicki Alvarez
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend4.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Amber Perry
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend5.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Kelly Fox
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend6.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Opal Farmer
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend7.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    May Hart
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend8.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Ana Byrd
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend9.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Arthur Bass
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-friend">
                <img src="assets/images/profile/friend10.png" alt="" />
                <div className="content">
                  <Link to="single-profile.html" className="name">
                    Stewart Bailey
                    <span className="isvarify">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </Link>
                  <p className="date">
                    a month ago
                  </p>
                  <Link to="single-profile.html" className="connnect-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div className="row">
                <div className="col-lg-12">
                    <div className="pagination-area text-center">
                         <Link  to="#"><i className="fas fa-angle-double-left"></i><span></span></Link>
                         <Link  to="#">1</Link>
                         <Link  to="#">2</Link>
                         <Link  to="#" className="active">3</Link>
                         <Link  to="#">4</Link>
                         <Link  to="#">5</Link>
                         <Link  to="#"><i className="fas fa-angle-double-right"></i></Link>
                    </div>
                </div>
            </div> --> */}
        </div>
      </section>
      {/* <!-- ==========Community-Section========== --> */}
      <div className="modal fade filter-p s-modal" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-between">

              <h6 className="modal-title text-center" id="exampleModalCenterTitle">Find Your Perfect Partner</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="join-now-box wow fadeInUp">

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
                        id='exampleInputincome'
                      />
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
                        id='exampleInputincome'
                      />
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
                        id='exampleInputedu'
                      />
                      {errors.edu && (
                        <span style={{ color: 'red' }}>{errors.edu.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="join-button">
                    <button className="custom-button">Find</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
