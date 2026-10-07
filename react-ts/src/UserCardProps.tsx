type UserCardProps = {
  name: string;
  age: number;
  isPremium?: boolean;
  tags: string[];
  address: {
    city: string;
    zipCode: number;
  };
};

export function UserCard({
  name,
  age,
  isPremium = false,
  tags,
  address,
}: UserCardProps) {
  return (
    <div className="p-5 w-64 border">
      <h2>
        {name} {isPremium && "*"}
      </h2>
      <p>Age: {age}</p>
      <p>City: {address.city}</p>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
