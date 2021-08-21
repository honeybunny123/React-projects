import React, {useState, useEffect} from 'react';
import './../styles/tooltip.css';

const Tooltip= ()=> {

  const [show, handleShow] = useState(false);
  const [content, updateContent] = useState('');
  const [x, updateX] = useState(0);
  const [y, updateY] = useState(0);
  
  const showTooltip = (e)=> {
    handleShow(true);
    updateContent(e.target.dataset.tooltip);
    let targetInfo = e.target.getBoundingClientRect();
    const tooltip = document.querySelector('.tooltip');
    if(x !== Math.round(targetInfo.left) || y !== Math.round(targetInfo.top)){
      let left = targetInfo.left + (targetInfo.width / 2) - (tooltip.clientWidth / 2);
      let top = targetInfo.top - tooltip.clientHeight;

      if(left < 50) {
        left = targetInfo.left + targetInfo.width;
        top = targetInfo.top;
      }

      if (left > (window.innerWidth - 200)) {
        left = targetInfo.left - tooltip.clientWidth;
        top = targetInfo.top;
      }

      if(top < 50) {
        top = targetInfo.top + targetInfo.height;
      }

      updateX(Math.round(left));
      updateY(Math.round(top));
    }

    
  }

  const hideTooltip = ()=> {
    handleShow(false);
  }

  useEffect(()=>{
    const tooltipHosts = document.querySelectorAll('.add-tooltip');
    if(tooltipHosts) {
      tooltipHosts.forEach((tooltipHost)=> {
        tooltipHost.addEventListener('mouseenter', showTooltip);
        tooltipHost.addEventListener('mouseleave', hideTooltip);
        return tooltipHost;
      })
    }
    

    return function cleanup() {
      tooltipHosts.forEach((tooltipHost)=> {
        tooltipHost.removeEventListener('mouseenter', showTooltip);
        tooltipHost.removeEventListener('mouseleave', hideTooltip);
        return tooltipHost;
      })
    }
  })

  return ( 
    show
    ? <div className="tooltip" style={{left: x + 'px', top: y + 'px'}}>{content}</div>
    : null)
  }

export default Tooltip;


