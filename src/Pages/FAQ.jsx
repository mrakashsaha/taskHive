import React from 'react';
import faqImage from "../assets/images/faqImage.webp"
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const FAQ = () => {
    return (
        <div>
            {/* Banner Image for about Page */}
            <div className="hero"
                style={{ backgroundImage: `url(${faqImage})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-base-100 dark:text-white/80">
                    <div className="p-4 py-32 space-y-4 text-center">
                        <h2 className='text-5xl font-medium leading-snug'>Answers to Your Most <br />
                            Common Questions</h2>
                        <p className='text-lg max-w-lg mx-auto text-center'>Explore our frequently asked questions to learn more about our services, processes, and how we can assist you.</p>
                    </div>
                </div>
            </div>


            {/* Tabs of FAQS */}

            <div className='p-4'>
                <div className='my-10'>
                    <div className='max-w-lg mx-auto text-center space-y-1'>
                        <p className='text-3xl font-medium'>FAQ'S For Buyer</p>
                        <p className='text-lg'>Your Questions, Answered</p>
                    </div>
                    <div className='max-w-4xl mx-auto my-4 space-y-4'>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">1. How do I create a task on TaskHive?</div>
                            <div className="collapse-content">
                                <p>To create a task, log in to your TaskHive account, go to the "Add New Task" section in your dashboard, and fill out the required details. Once submitted, your task will be live for workers to complete.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">2. How do I pay workers on TaskHive?</div>
                            <div className="collapse-content">
                                <p>Workers submit their work for review. Once you approve their submission, the payable amount will be automatically deducted from your TaskHive coins and credited to the worker's account.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">3. What happens if I reject a worker's submission on TaskHive?</div>
                            <div className="collapse-content">
                                <p>If you reject a submission, the worker will not receive payment, and the task will remain open for other workers to complete. The required number of workers for the task will be incremented by one.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">4. How do I purchase TaskHive coins?</div>
                            <div className="collapse-content">
                                <p>You can purchase TaskHive coins by navigating to the "Purchase Coin" section in your dashboard. Choose a package, complete the payment process, and the coins will be added to your account.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">5. Can I update or delete a task after posting it on TaskHive?</div>
                            <div className="collapse-content">
                                <p>Yes, you can update or delete a task from the "My Tasks" section in your dashboard. Deleting a task will refund the coins allocated for that task back to your account.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">6. How do I track my payment history on TaskHive?</div>
                            <div className="collapse-content">
                                <p>You can view your payment history in the "Payment History" section of your dashboard, which lists all transactions made on TaskHive.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-20'>
                    <div className='max-w-lg mx-auto text-center space-y-1'>
                        <p className='text-3xl font-medium'>FAQ'S For Worker</p>
                        <p className='text-lg'>Your Questions, Answered</p>
                    </div>
                    <div className='max-w-4xl mx-auto my-4 space-y-4'>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">1. How do I find tasks to complete on TaskHive?</div>
                            <div className="collapse-content">
                                <p>Navigate to the "Task List" section in your dashboard to view all available tasks. You can filter tasks based on your preferences and choose ones that match your skills.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">2. How do I submit a completed task on TaskHive?</div>
                            <div className="collapse-content">
                                <p>Once you complete a task, go to the task details page and fill out the submission form. Provide the required details and submit your work for review by the buyer.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">3. How do I get paid for completed tasks on TaskHive?</div>
                            <div className="collapse-content">
                                <p>Once the buyer approves your submission, the payable amount will be credited to your TaskHive account in coins. You can then withdraw these coins as cash.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">4. What happens if my submission is rejected on TaskHive?</div>
                            <div className="collapse-content">
                                <p>If your submission is rejected, you will not receive payment for that task. You can review the feedback and resubmit if the task is still open.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">5. What is the minimum amount I can withdraw on TaskHive?</div>
                            <div className="collapse-content">
                                <p>The minimum withdrawal amount is 200 TaskHive coins, which is equivalent to $10.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-100 border p-2">
                            <div className="collapse-title text-xl font-medium">6. Can I see the status of my submissions on TaskHive?</div>
                            <div className="collapse-content">
                                <p>Yes, you can track the status of all your submissions in the "My Submissions" section of your dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-5xl mx-auto flex flex-col items-center'>
                    <h2 className='text-center'>Have a question not covered in the FAQ?</h2>
                    <Link  className="btn bg-[#0A65FC] hover:bg-[#0244b0] text-base-100 mt-2 mb-10" to={"/aboutUs"}>Contact Us</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FAQ;