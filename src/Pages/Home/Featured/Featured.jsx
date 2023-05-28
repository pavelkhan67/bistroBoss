import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import img1 from '../../../assets/home/chef-service.jpg'

const Featured = () => {
    return (
        <div className=" bg-fixed text-white pt-8 mb-20" style={{ backgroundImage: `url(${img1})` }}>
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-black bg-opacity-20 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase my-2">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-slate-100 text-white border-b-4 mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;