import React, { useEffect } from 'react'

const ProgressBar = ({ progressBar }) => {
  useEffect(()=>{
    let progressbars = document.querySelectorAll('.progress-bar')
    setTimeout(()=>{
      progressbars.forEach(el=>{
        let percent = el.getAttribute('data-value');
        el.style.width = percent;
      })
    },500)
  },[])

  return (
      <div className="progress-bars">
        {progressBar.map(bar => (
          <article className="bar-item" key={bar.value}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar is-visible" data-value={bar.value}>
              <span className="value">{bar.value}</span>
            </div>
          </div>
          <p>{bar.progress_text}</p>
          </article>
        ))}
      </div>
  )
}

export default ProgressBar
