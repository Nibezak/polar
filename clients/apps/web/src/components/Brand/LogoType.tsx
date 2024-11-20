'use client'

const LogoType = ({
  className,
  width = '10%', // Set to 100% to allow full width scaling
  height = '10%', // Set to 100% to allow full height scaling
}: {
  className?: string
  width?: string | number
  height?: string | number
}) => {
  return (
    <svg
      viewBox="0 0 57.6 65"
      className={className ?? ''}
      width={width}
      height={height}
    >
      <style>
        {`
          .st0 { fill: #FFFFFF; fill-opacity: 0.8; }
          .st1 { fill: #FFFFFF; fill-opacity: 0.5; }
          .st2 { fill: #FFFFFF; fill-opacity: 0.2; }
        `}
      </style>
      <g transform="rotate(-15, 28.8, 32.5)">
        {/* Layer 1 (Opacity 0.2) */}
        <path
          className="st2"
          d="M57.5,27.5c-0.6,8.7-7.6,16.6-16.4,16.9v-6.6c0-6-4.3-11.2-10.2-12.4l-22-4.3V6.4c0-4,3.6-7,7.6-6.2l22.7,4.4
          C51.6,7.3,58.3,16.9,57.5,27.5L57.5,27.5z"
        />

        {/* Layer 2 (Opacity 0.5) */}
        <path
          className="st1"
          d="M16.7,48.3l-13-2.5c-1.9-0.4-3.6,1.1-3.6,3v9C0,60,1.6,62,3.8,62.4l13,2.5
          c1.9,0.4,3.6-1.1,3.6-3v-9C20.5,50.7,18.9,48.8,16.7,48.3z"
        />

        {/* Layer 3 (Opacity 0.8) */}
        <path
          className="st0"
          d="M29.8,30.4L9.9,26.5c-2.9-0.6-5.5,1.6-5.5,4.6v9.8c0,0,0.1,0,0.1,0
          l13,2.5c4.5,0.9,7.8,4.9,7.8,9.5v2l5,1c2.9,0.6,5.5-1.6,5.5-4.6V37.9C36,34.2,33.4,31.1,29.8,30.4L29.8,30.4z"
        />
      </g>
    </svg>
  )
}

export default LogoType
