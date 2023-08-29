function Input({
  KeyDownHandler,
  name,
  type,
  placeholder,
  classes,
  value,
  disabled,
}) {
  return (
    <input
      disabled={disabled}
      required={true}
      onKeyDown={KeyDownHandler}
      name={name}
      className={` text-stone-800 py-[7px] px-5 rounded-full transition-all duration-300
       outline-none focus:ring-2 ${classes}`}
      placeholder={placeholder}
      defaultValue={value}
      type={type}
    />
  );
}

export default Input;
