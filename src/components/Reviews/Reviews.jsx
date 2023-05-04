import React from 'react';

const Reviews = () => {
    return (
        <div className='mx-10 mb-10 mt-10'>
            <h1 className='text-4xl font-bold text-center mt-5 mb-10'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='text-center bg-info rounded-lg p-5'>
                    <img className='w-32 h-32 rounded-full mx-auto' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1683216933~exp=1683217533~hmac=60f0f3fa0cdfb741f81b3d057f492f7caa0c722b84aa8b3beef925379cccb108" alt="" />
                    <h2 className='text-2xl font-bold mb-4 mt-4'>Gregory</h2>
                    <p>I had an incredible experience using the chef website to find a personal chef for a special occasion dinner party. The website was user-friendly and made the process of finding and booking a chef incredibly simple. I was able to search for chefs in my area, review their profiles, and select the perfect chef based on their experience, style of cooking, and customer reviews.</p>
                </div>
                <div className='text-center bg-info rounded-lg p-5'>
                    <img className='w-32 h-32 rounded-full mx-auto' src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1683216957~exp=1683217557~hmac=e44129f19c5c527e7767574b0ad7221797d8f6ea23371c32c63c48ed12dbde27" alt="" />
                    <h2 className='text-2xl font-bold mb-4 mt-4'>John</h2>
                    <p>I recently used the chef website to find a professional chef for my daughter wedding reception, and I couldnt be happier with the results! As a busy mother of the bride, I was grateful for the ease and convenience of using the website. The platform was intuitive and user-friendly, allowing me to find a local chef who met all of my specific requirements in just a few minutes.</p>
                </div>
                <div className='text-center bg-info rounded-lg p-5'>
                    <img className='w-32 h-32 rounded-full mx-auto' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1683216974~exp=1683217574~hmac=3ed37857cdb38c89981ffe88b1a0fc34e036949e05ee305beebdf53ed8605730" alt="" />
                    <h2 className='text-2xl font-bold mb-4 mt-4'>Sofia</h2>
                    <p>I recently used the chef website to book a private chef for a small dinner party, and I must say I was impressed with the experience from start to finish. The website was user-friendly and made it easy to find the right chef for my needs. I was able to browse through a range of chefs in my area and compare their profiles, menus, and pricing. The website even provided customer reviews, which helped me make an informed decision.</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;