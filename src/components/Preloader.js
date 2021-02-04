export default function Preloader() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "#fff",
        }}
        width={100}
        height={100}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
      >
        <g transform="matrix(.7 0 0 .7 50 50)">
          <circle r={50} fill="#343a40" />
          <circle cy={-28} r={15} fill="#fff">
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 0 0;360 0 0"
            />
          </circle>
        </g>
      </svg>
    </div>

  )
}
