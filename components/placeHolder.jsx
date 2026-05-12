function InputField({label, type, name, placeholder}) {
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input type={type} id={name} placeholder={placeholder} />
        </div>
    )
}