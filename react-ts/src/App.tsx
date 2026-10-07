import { UserCard } from "./reacts/UserCardProps";

function App() {
  const sampleUser = {
    name: "Alex Mercer",
    age: 28,
    isPremium: true,
    tags: ["Developer", "Tech Enthusiast", "Blogger"],
    address: {
      city: "New York",
      zipCode: 1020,
    },
  };
  return (
    <>
      <h1>Hello world!</h1>
      <UserCard
        name={sampleUser.name}
        age={sampleUser.age}
        isPremium={sampleUser.isPremium}
        tags={sampleUser.tags}
        address={sampleUser.address}
      />
    </>
  );
}

export default App;
