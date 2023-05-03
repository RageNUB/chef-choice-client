import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {id,name,image_url, years_experience, likes_count, num_recipes} = props.data;

    return (
        <div className='border rounded-lg'>
            <div className='pt-3'>
                 <img className='w-40 h-40 lg:w-64 lg:h-64 rounded-full mx-auto' src={image_url} alt="" />
            </div>
            <h3 className='text-primary text-2xl font-semibold text-center mt-3'>{name}</h3>
            <div className='flex mt-4 justify-around mb-3'>
                <div className='text-center'>
                    <h3 className='text-primary lg:text-3xl text-2xl font-bold'>{num_recipes}</h3>
                    <h5 className='text-error lg:text-xl text-lg font-bold'>Recipe</h5>
                </div>
                <div className='text-center'>
                    <h3 className='text-primary lg:text-3xl text-2xl font-bold'>{years_experience}</h3>
                    <h5 className='text-error lg:text-xl text-lg font-bold'>Experience</h5>
                </div>
                <div className='text-center'>
                    <h3 className='text-primary lg:text-3xl text-2xl font-bold'>{likes_count}</h3>
                    <h5 className='text-error lg:text-xl text-lg font-bold'>Likes</h5>
                </div>
            </div>
            <div className='mx-5 mt-3 mb-5'>
                <button className='btn btn-primary text-white w-full'><Link to={`chef-info/${id}`}>View Recipes</Link></button>
            </div>
        </div>
    );
};

export default Card;