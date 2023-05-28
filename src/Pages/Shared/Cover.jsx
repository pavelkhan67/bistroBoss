import { Parallax } from 'react-parallax';

const Cover = ({ img, title, message }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center bg-black opacity-40 text-white w-10/12">
                    <div className="max-w-md py-10">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{message}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;