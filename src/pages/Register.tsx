import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { Button } from "../components/Button";
import ImageUploader from "../components/ImageUploader";

export const Register = () => {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = { name, school, email, code, photo };
    localStorage.setItem("ticketData", JSON.stringify(payload));
    navigate("/ticket");
  };

  return (
    <div className="bg-gradient-to-br from-[#0a001f] to-[#1a0142] text-white min-h-screen p-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-xl mb-4 text-center">
        Secure your seat at next year’s biggest coding conference.
      </p>
      <div className="bg-[#14012b] p-8 rounded-xl shadow-lg w-full max-w-md">
        <ImageUploader photo={photo} setPhoto={setPhoto} />
        <Input label="Full Name" value={name} onChange={setName} />
        <Input label="School Name" value={school} onChange={setSchool} />
        <Input
          label="Email Address"
          value={email}
          onChange={setEmail}
          type="email"
        />
        <Input label="Exclusive Access Code" value={code} onChange={setCode} />
        <Button label="Generate My Ticket" onClick={handleSubmit} />
      </div>
    </div>
  );
};
