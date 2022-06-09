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
                         <Link  to="index.html">
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
                             <Link  to="" data-toggle="modal" data-target="#exampleModalCenter">
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
                        <img src="assets/images/profile/friend1.png" alt=""/>
                        <div className="content">
                             <Link  to="/profile" className="name">
                                Erma Porter
                                <span className="isvarify">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                            </Link>
                            <p className="date">
                                a month ago
                            </p>
                             <Link  to="/profile" className="connnect-btn">
                                 View Profile
                            </Link>
                        </div>
                    </div>
                </div>
              
                 </div>
            
        </div>
    </section>
    {/* <!-- ==========Community-Section========== --> */}
    <div className="modal fade filter-p" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header justify-content-between">
                  
                    <h6 className="modal-title text-center" id="exampleModalCenterTitle">Find Your Perfect Partner</h6>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="join-now-box">
                        <div className="single-option">
                            <label className="title ml-3">
                                I am a :
                            </label>
                            <div className="option">
                                <div className="s-input mr-3 ml-5">
                                    <input type="radio" name="gender" id="male"/><label for="male">Male</label>
                                </div>
                                <div className="s-input ml-5">
                                    <input type="radio" name="gender" id="female"/><label for="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="single-option gender">
                            <label className="title ml-3">
                                Seeking a :
                            </label>
                            <div className="option">
                                <div className="s-input mr-2 ml-4">
                                    <input type="radio" name="seeking" id="males"/><label for="males">Man</label>
                                </div>
                                <div className="s-input ml-5">
                                    <input type="radio" name="seeking" id="females"/><label for="females">Woman</label>
                                </div>
                            </div>
                        </div>
                        <div className="single-option age">
                            <label className="title ml-3">
                                Ages :
                            </label>
                            <div className="option">
                                <div className="s-input mr-3 ml-5">
                                    <select className="select-bar">
                                        <option value="">18</option>
                                        <option value="">20</option>
                                        <option value="">24</option>
                                    </select>
                                </div>
                                <div className="separator">
                                    -
                                </div>
                                <div className="s-input mr-3 ml-5">
                                    <select className="select-bar">
                                        <option value="">30</option>
                                        <option value="">35</option>
                                        <option value="">40</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="single-option">
                            <label className="title ml-3">
                            Workplace [City]:
                            </label><input
                        {...register("work", {
                          required: "Enter Your Workplace [City]:",
                        })}
                        type="number"
                        className="my-form-control col-sm-7 ml-4"
                        placeholder=" Enter Your Workplace [City]:"
                        id="exampleInputwork"
                      />
                      {errors.work&& (
                          <span style={{ color: "red" }}>
                            {errors.work.message}
                          </span>
                        )}
                            
                            
                        </div>
                        <div className="single-option">
                    
                      <label
                        htmlFor="inputincome"
                        className=" ml-3 title"
                      >
                        {" "}
                        Income/उत्पन्न:
                      </label>
                      <input
                        {...register("income", {
                          required: "Enter Your  Income/उत्पन्न",
                        })}
                        type="number"
                        className="my-form-control col-sm-7 ml-4"
                        placeholder="Enter Your  Income/उत्पन्न"
                        id="exampleInputincome"
                      />
                      {errors.income && (
                          <span style={{ color: "red" }}>
                            {errors.income.message}
                          </span>
                        )}
                    </div>
                    <div className='single-option last'>
                    <label
                        htmlFor="exampleInputedu"
                        className="title ml-2"
                      >
                        Qualification/शैक्षणिक पात्रता:
                      </label>
                    
                     <input
                      {...register("edu", {
                        required:
                          "Enter Your Educational Qualification/शैक्षणिक पात्रता",
                      })}
                      type="text"
                      placeholder="Enter Your Educational Qualification/शैक्षणिक पात्रता"
                      className="my-form-control col-sm-7 ml-4"
                      id="exampleInputedu"
                    />

                        {errors.edu && (
                          <span style={{ color: "red" }}>
                            {errors.edu.message}
                          </span>
                        )}
                      </div>
                        <div className="joun-button">
                            <button className="custom-button">Find</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
