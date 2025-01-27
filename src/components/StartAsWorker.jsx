
import { Link } from 'react-router-dom';

const StartAsWorker = () => {
    return (
        <div>
            <div className="relative h-[520px] w-full">

                <video
                    className="absolute top-0 left-0 h-full w-full object-cover"
                    src={"https://raw.githubusercontent.com/mrakashsaha/videos/refs/heads/main/1080p.mp4"}
                    autoPlay
                    loop
                    muted
                />

                <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white container mx-auto p-4 md:p-0">
                    <h1 className="text-4xl md:text-5xl font-medium mb-4">Start as a Worker</h1>
                    <p className="text-lg md:text-xl mb-6  md:w-1/2 lg:w-2/5">
                        Turn Your Skills into Income Join a Trusted Platform Where Your Expertise Meets Endless Opportunities. Start Earning Today!
                    </p>
                    <button className="btn btn-primary btn-lg bg-[#3cc7a6] border-[#3cc7a6] hover:bg-[#0bb990] hover:border-[#0bb990] text-white">
                        <Link to={"/login"}>Become a Worker</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartAsWorker;