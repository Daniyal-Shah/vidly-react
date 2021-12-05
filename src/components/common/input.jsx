const Input = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {error && (
        <div class="alert alert-danger" role="alert">
          {name} is required
        </div>
      )}
    </div>
  );
};

export default Input;
