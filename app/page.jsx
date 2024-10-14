
export default function Home() {
  return (
    <div className="grid place-content-center h-screen w-full bg-blue-800">
      <h2 className="font-semibold text-inherit">Hi, We are</h2>
      <h1 className="ml-4 text-5xl my-3">Sigma Developers</h1>
      <div className="flex gap-20">
        <h2>WEB DEVELOPER</h2>
        <div>
          <h2 className="text-lg font-semibold">Tecnologies</h2>
          <ul>
            <li>Node JS</li>
            <li>React</li>
            <li>TailWind</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
