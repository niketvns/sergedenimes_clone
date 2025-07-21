"use client";
import { useState } from "react";
import { IconContainer, IconsNameList } from "@/components/Icons";

const SignupBlock: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Not Implemented Yet!");
  };

  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4 flex flex-col gap-2">
        <h2 className="text-xl uppercase font-serif text-gray-900">
          Join the Community
        </h2>
        <p className="text-sm text-gray-600">
          Sign up to our mailing list for exclusive access.
        </p>
        <div className="flex items-center justify-center">
          <form
            className="flex flex-col sm:flex-row justify-center items-center bg-gray-100"
            onSubmit={handleSubmit}
            data-list="Ybvitd"
            data-key="ULvF98"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="px-4 cursor-pointer">
              <IconContainer icon={IconsNameList.ArrowRightIcon} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { SignupBlock };
