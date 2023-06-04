import { NavLink } from 'react-router-dom';
import Cover from '../../Shared/Cover';
import MenuItem from '../../Shared/MenuItem';

const MenuCategory = ({items, title, img, message}) => {
    return (
        <>
            { title && <Cover img={img} title={title} message={message}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
            <NavLink to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4 mb-10">ORDER YOUR FAVOURITE FOOD</button>
            </NavLink>
            </div>
        </>
    );
};

export default MenuCategory;