export default function Svg({ name }) {
  switch (name) {
    case "delete":
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'>
          <g fill='none' stroke='#4A4A4A' className='delSvg'>
            <path d='M5.5 7.5V20A1.5 1.5 0 0 0 7 21.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5h-14z' />
            <path d='M8.5 10.41v8.18M12.5 10.41v8.18M16.5 10.41v8.18M9 4.333V3.244C9 2.557 9.627 2 10.4 2h4.2c.773 0 1.4.557 1.4 1.244v1.09' />
            <rect width='18' height='3' x='3.5' y='4.5' rx='1.5' />
          </g>
        </svg>
      );

    case "logOut":
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'>
          <path d='M15 24H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1s-1-.4-1-1V2H2v20h12v-6c0-.6.4-1 1-1s1 .4 1 1v7c0 .6-.4 1-1 1z' />
          <path d='M23 13H8c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1z' />
          <path d='M23 13c-.3 0-.5-.1-.7-.3l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z' />
          <path d='M19 17c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4-4c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-4 4c-.2.2-.4.3-.7.3z' />
        </svg>
      );

    default:
      break;
  }
}
