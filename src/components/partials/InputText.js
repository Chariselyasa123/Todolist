import '../../styles/partials/InputText.css'

const InputText = ({ value, onChange, onKeyPress, isError }) => {
    return (
        <div className="input-text">
            <input
                onChange={onChange}
                onKeyPress={e => onKeyPress(e)}
                type="text"
                value={value}
                placeholder={`${isError ? 'Please fill the filed first...' : 'Write Todo Here...'}`}
                className={`${isError && 'input-error'}`}
            />
            {!isError
                ? <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            }
        </div>
    )
}

export default InputText