# Implementation
<!DOCTYPE html>
<html>
  <head>
    <title>Make this work</title>
    <style>
      /* Add a border to the SVG */
      svg {
        border: 1px solid black;
      }
      
      /* Fill the circles with blue color */
      circle {
        fill: blue;
      }
      rect {
        fill: none;
        stroke: black;
        stroke-width: 1px;
      }
      line {
        stroke: black;
        stroke-width: 1px;
      }
      marker {
        fill: black;
      }

    </style>
  </head>
  <body>
    <svg width="500" height="600">
      <rect x="190" y="0" width="150" height="110"/>
      <rect x="400" y="210" width="100" height="120"/>
      <rect x="0" y="210" width="120" height="120"/>
      <rect x="190" y="490" width="150" height="110"/>
      <!-- Specify the radius using the 'r' attribute -->
      <circle cx="280" cy="15" r="10"/>
      <circle cx="300" cy="40" r="20"/>
      <circle cx="240" cy="50" r="40"/>
      <circle cx="10" cy="250" r="10"/>
      <circle cx="35" cy="290" r="30"/>
      <circle cx="50" cy="240" r="20"/>
      <circle cx="450" cy="240" r="20"/>
      <circle cx="460" cy="290" r="30"/>
      <circle cx="490" cy="250" r="10"/>
      <circle cx="280" cy="570" r="10"/>
      <circle cx="210" cy="570" r="20"/>
      <circle cx="250" cy="530" r="30"/>

      
      <line x1="250" y1="110" x2="250" y2="490"/> <!-- North-South axis -->
      <line x1="120" y1="280" x2="400" y2="280"/> <!-- East-West axis -->
      
      <!-- Labels -->
      <text x="160" y="20" text-anchor="middle">North</text>
      <text x="480" y="350" text-anchor="middle">East</text>
      <text x="160" y="590" text-anchor="middle">South</text>
      <text x="20" y="350" text-anchor="middle">West</text>
      
    </svg>
  </body>
</html>


