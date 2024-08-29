
import image from '../../assets/bg-around.jpg';
const SharedHero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className='bg-cover bg-center object-cover bg-no-repeat bg-fixed py-24'
        >
            <div className='container m-auto'>
                <div className="space-y-2">

                    <div className="collapse collapse-plus bg-white/80 text-black">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/80 text-black">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/80 text-black">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SharedHero;