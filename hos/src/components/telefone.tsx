import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import PhoneNumber, { parsePhoneNumberFromString } from 'libphonenumber-js';

interface TelefoneInputProps {}

export interface TelefoneInputRef {
  clearTelefoneInput: () => void;
}

const TelefoneInput: React.ForwardRefRenderFunction<TelefoneInputRef> = (
  props,
  ref
) => {
  const [telefone, setTelefone] = useState('');
  const [telefoneValido, setTelefoneValido] = useState(true);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const validarTelefone = (inputTelefone: string) => {
    const parsedTelefone = parsePhoneNumberFromString(inputTelefone, 'BR');
    return parsedTelefone ? parsedTelefone.isValid() : false;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoTelefone = event.target.value;
    setTelefone(novoTelefone);

    const valido = validarTelefone(novoTelefone);
    setTelefoneValido(valido);
  };

  const clearTelefoneInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setTelefone('');
    setTelefoneValido(true);
  };

 
  useImperativeHandle(ref, () => ({
    clearTelefoneInput,
  }));


  return (
    <label className="telefone text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem] group hover:text-magenta">
      Telefone*
      <input
      ref={inputRef}
        name="data[telefone]"
        placeholder="(DD) _____-____"
        className={`hover:border-magenta w-[9rem] py-2 border-2 rounded-lg font-normal text-[0.7rem] tablet:h-[3rem] pl-[0.7rem] mt-[0.3rem] tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem] ${
          telefoneValido ? 'border-gray-300' : 'border-red-500'
        }`}
        value={telefone}
        onChange={handleChange}
        required
      />
      {!telefoneValido && (
        <p className="text-red-500 text-[0.7rem] mt-1">Telefone inválido.</p>
      )}
    </label>
  );
};

export default forwardRef(TelefoneInput);
