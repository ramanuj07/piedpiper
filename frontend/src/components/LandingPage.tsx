import { useState } from "react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex gap-6 items-center">
      <Input
        type="text"
        className="border border-black"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />

      <Link to={`/room/?name=${name}`}>Join</Link>
    </div>
  );
};

export default LandingPage;
