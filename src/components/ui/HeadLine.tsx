/* eslint-disable @typescript-eslint/no-explicit-any */


const HeadLine = ({heading, subHeading}: {heading: string, subHeading: any}) => {
    return (
        <div className='mb-20 flex flex-col font-sans items-center justify-center space-y-4'>

            <p className="text-3xl md:text-5xl items-center  font-extrabold border-l-[6px] border-l-blue-600 px-3">
                {heading}
            </p>
            <p className='font-semibold text-center'>{subHeading}</p>
        </div>
    );
};

export default HeadLine;