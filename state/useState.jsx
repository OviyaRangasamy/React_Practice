import { useState } from "react";

const UsestateFC = () => {
  const [Food, setNewFood] = useState("Biriyani");

  return (
    <div>
      <input
        type="text"
        value={Food}
        onChange={(e) => setNewFood(e.target.value)}
      />
      <p>Name: {Food}</p>
    </div>
  );
};

export default UsestateFC;