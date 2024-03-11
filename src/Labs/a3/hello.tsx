const handleClick = (parameter = "Hello") => {
  console.log(parameter);
  const a = [1, 2, 3];
  const e = [...a];
  const [f] = e;
  console.log(f);
};

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
      {/* <button onClick={() => handleClick("Hello World")}>Click Me</button> */}
      <button onClick={() => handleClick()}>Click Me</button>
      {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
};

export default Hello;
