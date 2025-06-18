import React from 'react';

function btn1(e) {
  alert("btn1");
  e.stopPropagation(); // Still stops bubbling
}

function btn2() {
  alert("btn2");
}

function btn3() {
  alert("btn3");
}

function mainFnCapture() {
  alert("mainFn Capture (Parent during Capture phase)");
}

function mainFnBubble() {
  alert("mainFn Bubble (Parent during Bubbling phase)");
}

const EventBub = () => {
  return (
    <>
      {/* Parent with both capturing and bubbling */}
      <div 
        onClick={mainFnBubble}
        onClickCapture={mainFnCapture}
        style={{ border: '2px solid black', padding: '1rem' }}
      >
        <div>
          <button onClick={btn1}>Btn 1</button>
        </div>
        <div>
          <button onClick={btn2}>Btn 2</button>
        </div>
        <div>
          <button onClick={btn3}>Btn 3</button>
        </div>
      </div>
    </>
  );
};

export default EventBub;
