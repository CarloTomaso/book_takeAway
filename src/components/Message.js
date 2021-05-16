
const Message = ({ message, error }) => {
    const textColor = error ? 'red' : 'black'
    return (
        <p style={{ fontSize: '1.3 em', color: textColor }} > {message}</p >
    )
}

export default Message