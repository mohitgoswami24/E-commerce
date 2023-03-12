import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />

      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.0132769202687!2d79.48814521450622!3d29.193736032199737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b4a333cd645%3A0xc27a14d124e926c1!2sRaja%20Rani%20Vihar%20Rd%2C%20Vasudevpuram%2C%20Haldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1678421420491!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5 '>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div className='col-6'>
                <h3 className='contact-title mb-4'>Contact</h3>
                 <form action="">
                   <div>
                      <input type="text" className='form-control' />
                   </div>
                   <div>
                      <input type="text" className='form-control' />
                   </div>
                   <div>
                      <input type="text" className='form-control' />
                   </div>
                   <div>
                      <input type="text" className='form-control' />
                   </div>
                 </form>
              </div>
              <div className='col-6'>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact