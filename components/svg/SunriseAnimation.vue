<template>
  <svg version="1.1"
      baseProfile="full"
      width="100%" height="500"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <defs>
      <!-- Define the radial gradient for the sun -->
      <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style="stop-color:#FFA500; stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFC69D; stop-opacity:1" />
      </radialGradient>
      
      <!-- Define the glow filter -->
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood result="flood" flood-color="#FFC69D" flood-opacity="1"/>
        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"/>
        <feGaussianBlur in="mask" stdDeviation="8" result="blurred"/>
        <feMerge>
          <feMergeNode in="blurred" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <polygon id="ray" points="0,5  5,0  5,10" style="fill:#ff0000;" transform="translate(-8,0) rotate(90)"/>
      <g id="rays">
          <use xlink:href="#ray" x="0"/>
          <use xlink:href="#ray" x="12"/>
          <use xlink:href="#ray" x="24"/>
          <use xlink:href="#ray" x="36"/>
          <animateMotion path="M0,30A30,30 0 1,1 60,30" begin="0s" dur="10s" repeatCount="indefinite" rotate="auto"/> 
        </g>
        <g id="sun">
            <circle class="glowing-circle" x="15" y="0" cx="30" cy="30" r="30" style="fill:url(#sunGradient); filter:url(#glow);" />
        </g>
        <path id="sunPath" d="M0,250 A10,10 0 1,1 420,250" style="stroke:#660000; fill:none;"/>
        <image id="cloud" x="-74" y="40" width="74" height="29" xlink:href="https://freepngimg.com/thumb/cloud/9-cloud-png-image.png"/>
    </defs>
    <rect x="0" y="0" id="#hero" style="fill: #02122e">
          <animate
              id="backgroundAnim"
              attributeName="fill"
              values="#02122e; #2f61a6; #8be0f9; #8be0f9; #2f61a6; #02122e;"
              dur="10s"
              repeatCount="indefinite" />
      </rect>

    <use xlink:href="#cloud">
    <animate attributeName="x" attributeType="XML"
              from="0"  to="574"
              begin="2s; backgroundAnim.repeatEvent+2s" dur="4s"
      />
    </use>
    <use xlink:href="#cloud" y="50">
    <animate attributeName="x" attributeType="XML"
              from="0"  to="574"
              begin="3s; backgroundAnim.repeatEvent+3s" dur="4s"
      />
    </use>
    <use xlink:href="#sun" x="0" y="0">
          <animateMotion
              begin="0s" dur="10s" repeatCount="indefinite">
            <mpath xlink:href="#sunPath"/>
          </animateMotion>
          <animateTransform
              attributeName="transform" type="scale"
              values="0.5; 1.5; 0.5"
              additive="sum"
              dur="10s"
              repeatCount="indefinite" />
    </use>
    
  </svg>
</template>
