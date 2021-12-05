const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {error[name] && (
        <div class="alert alert-danger" role="alert">
          {name} is required
        </div>
      )}
    </div>
  );
};

export default Input;
