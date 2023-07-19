import React from 'react'

export default function Sidebar() {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <button className='ham-btn' style={{ display: 'block' }}>HOME</button>
          <button className='ham-btn' style={{ display: 'block' }}>Contact</button>
          <button className='ham-btn' style={{ display: 'block' }}>Support</button>
        </div>
      </div>
  )
}
