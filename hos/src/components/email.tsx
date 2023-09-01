import { useState } from 'react';

const Email: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      setEmailError('Por favor, insira um email válido.');
      return false;
    }

    setEmailError(null);
    return true;
  };

  return (
    <div>
      <label className="email text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem] group hover:text-magenta">E-mail*
        <input
          type="text"
          name="data[email]"
          placeholder="seu-email@gmail.com"
          className="hover:border-magenta w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:h-[3rem]  tablet:py-[1rem]"
          value={email}
          onBlur={validateEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {emailError && <p className="text-red-500 mt-[-1rem] w-[15rem]">{emailError}</p>}
    </div>
  );
};

export default Email;
