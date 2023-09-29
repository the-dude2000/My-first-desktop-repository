import React from 'react'

function PortalDemo() {
  return ReactDOM.createportal (
    <div>
        <h1>
            Portals demo
        </h1>,
        document.getElementById('portal-root')
    </div>
  )
}

export default PortalDemo