const About = () => {
    return (
        <div className="container m-auto py-24">
            <div className="flex justify-center text-center items-center py-5">
                <h1 className="text-3xl font-bold my-2 border-l-8 border-l-blue-600 px-3 py-5">
                    About Us
                </h1>
            </div>
            <div className="divider"></div>

            {/* Company History Section */}
            <div className="company-history my-6">
                <h2 className="text-3xl font-bold mb-4">Company History</h2>
                <p className="text-lg">
                    Founded in 2024, our mission is to At Europe Drive, our mission is to provide exceptional car rental services
                    with a focus on quality, reliability, and customer satisfaction. We aim to
                    make every journey comfortable and memorable. Our vision is to provide our customers with an exceptional experience.
                </p>
            </div>

            {/* Our Team Section */}
            <div className="team-members my-6">
                <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="team-member text-center">
                        <img src="https://i.ibb.co/7VQBzR5/man-1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Shah Alam</h3>
                        <p className="text-md">Founder & CEO</p>
                    </div>
                    <div className="team-member text-center">
                        <img src="https://i.ibb.co/GPZtc87/man-3.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
                        <p className="text-md">Head of Marketing</p>
                    </div>
                    <div className="team-member text-center">
                        <img src="https://i.ibb.co/PCFnpQh/pexels-pixabay-220453.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto" />
                        <h3 className="text-xl font-semibold mt-4">Emily Johnson</h3>
                        <p className="text-md">Product Manager</p>
                    </div>
                </div>
            </div>

            {/* Our Fleet Section */}
            <div className="our-fleet my-6">
                <h2 className="text-3xl font-bold mb-4">Our Fleet</h2>
                <p className="text-lg">
                    We offer a variety of vehicles including economy cars, luxury cars, SUVs, and more to meet your needs.
                </p>
            </div>

            {/* Values & Commitment Section */}
            <div className="values-commitment my-6">
                <h2 className="text-3xl font-bold mb-4">Values & Commitment</h2>
                <p className="text-lg">
                    We are committed to delivering exceptional customer service and promoting sustainability in everything we do.
                </p>
            </div>

            {/* Contact Information Section */}
            <div className="contact-information my-6">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-lg"><strong>Phone:</strong> (+880) 1660166344</p>
                <p className="text-lg"><strong>Email:</strong> euro@car.com</p>
                <p className="text-lg"><strong>Address:</strong> Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default About;
