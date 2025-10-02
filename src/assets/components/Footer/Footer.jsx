import React from 'react'

function Footer() {
  return (
    <div className=' bg-black py-10 px-5'>
        <div className='grid grid-cols-1 text-center md:grid-cols-5 gap-10 text-white'>
            <div>
                <h3 className='text-2xl font-bold mb-3'>CS — Ticket System</h3>
                <p className='text-[#a1a1aa]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <h3 className='text-2xl font-bold mb-3'>Company</h3>
                <ul className='space-y-4 text-[#a1a1aa]'>
                    <li><a href="">About Us</a></li>
                    <li><a href=""></a>Our Mission</li>
                    <li><a href=""></a>Contact Saled</li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-bold mb-3'>Servicea</h3>
                <ul className='space-y-4 text-[#a1a1aa]'>
                    <li><a href="">Products & Services</a></li>
                    <li><a href=""></a>Customer Stories</li>
                    <li><a href=""></a>Download Apps</li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-bold mb-3'>Information</h3>
                <ul className='space-y-4 text-[#a1a1aa]'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href=""></a>Terms & Conditions</li>
                    <li><a href=""></a>Join Us</li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-bold mb-3'>Social Links</h3>
                <ul className='space-y-4 text-[#a1a1aa]'>
                    <li><a href="">@CS — Ticket System</a></li>
                    <li><a href=""></a>@CS — Ticket System</li>
                    <li><a href=""></a>@CS — Ticket System</li>
                    <li><a href=""></a>support@cst.com</li>
                </ul>
            </div>
        </div>
        <p className='max-w-[1440px] mx-auto text-white text-2xl font-bold text-center mt-5'>© 2025 CS — Ticket System. All rights reserved.</p>     
    </div>
  )
}

export default Footer