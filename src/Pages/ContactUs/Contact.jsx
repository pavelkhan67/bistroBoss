import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import ContactCoverImg from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaLocationArrow, FaPhone } from 'react-icons/fa';

const Contact = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>
            <Cover img={ContactCoverImg} title="Contact Us" message="Would you like to try a dish!"></Cover>

            <SectionTitle subHeading="Visit Us" heading="Our Location"></SectionTitle>

            <div className='grid lg:grid-cols-3 gap-5 py-10'>
                <div className="card card-compact rounded-none w-full shadow-xl">
                    <div className='bg-warning flex justify-center '>
                        <div className='text-2xl py-2'><FaPhone></FaPhone> </div>
                    </div>
                    <div className="card-body text-center mx-5 bg-base-200 mb-5">
                        <h2 className="text-xl font-semibold text-center pt-4 pb-2">Phone</h2>
                        <p className='pb-8'>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="card card-compact rounded-none w-full shadow-xl">
                    <div className='bg-warning flex justify-center '>
                        <div className='text-2xl py-2'><FaLocationArrow></FaLocationArrow> </div>
                    </div>
                    <div className="card-body text-center mx-5 bg-base-200 mb-5">
                        <h2 className="text-xl font-semibold text-center pt-4 pb-2">Address</h2>
                        <p className='pb-8'>San Fransisco, LA</p>
                    </div>
                </div>
                <div className="card card-compact rounded-none w-full shadow-xl">
                    <div className='bg-warning flex justify-center '>
                        <div className='text-2xl py-2'><FaPhone></FaPhone> </div>
                    </div>
                    <div className="card-body text-center mx-5 bg-base-200 mb-5">
                        <h2 className="text-xl font-semibold text-center pt-4 pb-2">Working Hours</h2>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p className='pb-8'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>

            <SectionTitle subHeading="Send Us a Message" heading="CONTACT FORM"></SectionTitle>

            <div className="card-body bg-base-200 mb-20">
                <form className='w-11/12 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control pt-5">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea placeholder="Message" name='message' defaultValue='' className="textarea textarea-bordered h-40 textarea-md w-full" ></textarea>
                    </div>

                    <div className="form-control w-1/2 lg:w-1/3 mx-auto mt-16 mb-5">
                        <input className='btn btn-warning text-white' type="submit" value="Send Message" /> 
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;