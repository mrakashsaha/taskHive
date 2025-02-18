import React from 'react';
import aboutUs from "../assets/images/aboutUs.jpg"
import workEnv from "../assets/images/workenv.webp"
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import team1 from "../assets/team/team1.jpg"
import team2 from "../assets/team/team6.jpg"
import team3 from "../assets/team/team3.jpg"
import team4 from "../assets/team/team4.jpg"
import team5 from "../assets/team/team2.jpg"
import team6 from "../assets/team/team5.jpg"
import Footer from '../Footer/Footer';

const AboutUs = () => {

    const teamMembers = [
        {
          id: 1,
          name: "John Doe",
          designation: "CEO",
          image: team1
        },
        {
          id: 2,
          name: "Jane Smith",
          designation: "Marketing Director",
          image: team2
        },
        {
          id: 3,
          name: "Michael Lee",
          designation: "Lead Developer",
          image: team3
        },
        {
          id: 4,
          name: "Emily Carter",
          designation: "Product Manager",
          image: team4
        },
        {
          id: 5,
          name: "David Wilson",
          designation: "Operations Head",
          image: team5
        },
        {
          id: 6,
          name: "Sophia Brown",
          designation: "HR Manager",
          image: team6
        }
      ];
      



    return (
        <div>
            {/* Banner Image for about Page */}
            <div className="hero"
                style={{ backgroundImage: `url(${aboutUs})` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-base-100 dark:text-white/70">
                    <div className="p-4 py-32 space-y-4 text-center">
                        <h2 className='text-5xl font-medium leading-snug'>We help people build <br />businesses</h2>
                        <p className='text-lg'>We empower businesses by connecting top talent</p>
                    </div>
                </div>
            </div>

            {/* About Company Section */}
            <div>
                <div className='max-w-lg mx-auto text-center my-20 space-y-2'>
                    <p className='uppercase text-[#0A65FC] font-medium'>About company</p>
                    <h2 className='text-4xl font-medium'>Now, Let's Grow Yours!</h2>
                    <p className='text-lg'>We empower people worldwide to turn their work dreams into reality—building successful businesses from the ground up and achieving financial and professional independence.</p>

                </div>
            </div>


            {/* Card */}
            <div className='mx-auto max-w-6xl p-4 my-20'>
                <div className="card lg:card-side bg-base-100 border border-base-300">
                    <figure className='flex-1'>
                        <img
                            className=''
                            src={workEnv}
                            alt="Work Enviroment" />
                    </figure>
                    <div className="flex-1 p-8 space-y-4">
                        <p className='uppercase text-[#0A65FC] font-medium'>Our Approach</p>
                        <h2 className='text-3xl font-medium'>Building Success Together</h2>
                        <p className='text-lg leading-normal'>We’re committed to fostering growth and success, connecting businesses and freelancers in a way that promotes collaboration, innovation, and trust. We focus on creating valuable partnerships and supporting professionals in achieving their full potential.</p>
                        <Link to={"/"} className='btn btn-outline hover:bg-[#0A65FC] hover:border-[#0A65FC]'>Explore More</Link>
                    </div>
                </div>
            </div>

            {/* Our Leaders */}
            <div className='max-w-7xl mx-auto my-20 p-4'>
                <div className='max-w-lg mx-auto text-center space-y-2'>
                    <p className='uppercase text-[#0A65FC] font-medium'>Our Leaders</p>
                    <h2 className='text-4xl font-medium'>Meet Our Team</h2>
                    <p className='text-lg'>A group of driven, passionate professionals working together to empower your business and help you succeed.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10'>
                    {
                        teamMembers.map(teamPlayer =>
                            <div className='flex flex-col items-center space-y-2'>
                                <div class="avatar">
                                    <div class="w-64 rounded-full">
                                        <img src={teamPlayer.image} />
                                    </div>
                                </div>
                                <h2 className='text-xl font-medium'>{teamPlayer?.name}</h2>
                                <h5 className='text-lg text-center'>{teamPlayer?.designation}</h5>
                                <div className='flex justify-between gap-x-4 py-2'>
                                    <a href="https://www.facebook.com/im.akashsaha" target='_blank'><FaFacebook className='text-xl'></FaFacebook></a>
                                    <a href="https://www.linkedin.com/in/mrakashsaha" target='_blank'><FaLinkedinIn className='text-xl'></FaLinkedinIn></a>
                                    <a href="https://x.com/MrAkash247" target='_blank'><FaXTwitter className='text-xl'></FaXTwitter></a>
                                    <a href="https://github.com/mrakashsaha" target='_blank'><FaGithub className='text-xl'></FaGithub></a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* Contact Us */}
            <div className='max-w-7xl mx-auto my-20 p-4'>
                <div className='max-w-lg mx-auto text-center space-y-2'>
                    <p className='uppercase text-[#0A65FC] font-medium'>OUR LOCATIONS</p>
                    <h2 className='text-4xl font-medium'>Find us at our global hubs</h2>
                    <p className='text-lg'>Discover our global hubs, where innovation meets opportunity.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;