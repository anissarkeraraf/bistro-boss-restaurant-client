import chef from '../../../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div>
            <div>
                <img src={chef} alt="" />
            </div>
            <div className='bg-white opacity-90 z-10 md:-mt-48 lg:-mt-80 m-10 md:m-32 md:p-5 lg:p-16'>
                <h2 className="text-3xl space-x-4 text-center md:mb-3">Bistro Boss</h2>
                <p className='text-center lg:w-[800px] lg:mx-auto'>The best restaurant in the world is Central, in Lima. The dynamic tasting menu restaurant from chef Virgilio Martinez features ingredients from very diverse landscape,</p>
            </div>
        </div>
    );
};

export default ChefService;