function InputField({ label, type, name, placeholder, value, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default InputField