import React from 'react'

import './Preview.scss'

function Preview() {
  return (
    <div id="preview">
      <div className="iframe_wrap">
        <iframe src="https://how-much.netlify.app/login" title="preview" frameborder="0" width="375" height="812" />
      </div>
    </div>
  )
}

export default Preview
