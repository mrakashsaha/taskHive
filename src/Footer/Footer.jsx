import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { GrServers, GrTasks } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='bg-[#131313] dark:bg-base-300'>
            <div className='container mx-auto'>
                <footer className="footer text-neutral-content py-10 px-4 md:px-0">
                    <nav className='text-base'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='text-base'>
                        <h6 className="footer-title">Categories</h6>
                        <a className="link link-hover">Writing & Translation</a>
                        <a className="link link-hover">Technology & Programming</a>
                        <a className="link link-hover">Video, Photo & Image</a>
                        <a className="link link-hover">Digital Marketing</a>
                    </nav>
                    <nav className='text-base'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='text-base'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer  text-neutral-content border-white/10 border-t py-10 px-4 md:px-0">
                    <aside className="grid-flow-col items-center">
                        <GrServers  className='text-3xl mr-2'></GrServers>
                        <p className='text-base'>
                           TaskHive Inc.
                            <br />
                            Providing reliable services since 1992
                        </p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.linkedin.com/in/akash-kumar-saha-086656177" target="_blank">
                                <FaLinkedin className='text-3xl'></FaLinkedin>
                            </a>
                            <a href="https://www.facebook.com/im.akashsaha" target="_blank">
                                <FaFacebook className='text-3xl'></FaFacebook>
                            </a>
                            <a href="https://github.com/mrakashsaha" target="_blank">
                                <FaGithub className='text-3xl'></FaGithub>
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;