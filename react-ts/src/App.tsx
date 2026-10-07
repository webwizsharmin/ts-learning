import { CustomButton } from "./advancedProps";
import { UserCard } from "./UserCardProps";

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

  const handleButtonClick = () => {
    alert("Button was clicked!");
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

      <div className="p-10 text-center font-sans">
        <h1 className="text-2xl">Testing Custom Buttons</h1>

        <CustomButton label="Click Me" onClick={handleButtonClick}>
          <span>🚀</span>
        </CustomButton>
      </div>
    </>
  );
}

export default App;
