

const SectionTiltle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-3/6 my-8">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h2 className="text-4xl border-y-4 uppercase py-4">{heading}</h2>
        </div>
    );
};

export default SectionTiltle;