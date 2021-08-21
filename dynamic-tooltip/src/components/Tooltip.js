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
    if(x !== Math.round(targetInfo.left) || y !== Math.round(targetInfo.top)){
      updateX(Math.round(targetInfo.left + targetInfo.width));
      updateY(Math.round(targetInfo.top));
    }
    
  }

  const hideTooltip = ()=> {
    handleShow(false);
  }

  useEffect(()=>{
    const tooltips = document.querySelectorAll('.add-tooltip');
    if(tooltips) {
      tooltips.forEach((tooltip)=> {
        tooltip.addEventListener('mouseenter', showTooltip);
        tooltip.addEventListener('mouseleave', hideTooltip);
        return tooltip;
      })
    }
    

    return function cleanup() {
      tooltips.forEach((tooltip)=> {
        tooltip.removeEventListener('mouseenter', showTooltip);
        tooltip.removeEventListener('mouseleave', hideTooltip);
        return tooltip;
      })
    }
  })

  return ( 
    show
    ? <div className="tooltip" style={{left: x + 'px', top: y + 'px'}}>{content}</div>
    : null)
  }

export default Tooltip;


