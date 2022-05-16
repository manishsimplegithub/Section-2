// 1. Component is represented by a JavaScript Function
// 2. Functions(Components) first letter should by uppercase
// 3. There should be a top level return statement in every component.
// 4. Component should by exported/imported by its name.

const Home = () => {
  let myhobby = "Coding & Gaming & Crafting";

  return (
    <div>
      <h1>Home Component</h1>
      <h2>My Hobby is {myhobby} </h2>
      <h3>2 + 2 = {2 + 2}</h3>
    </div>
  );
};

export default Home;
