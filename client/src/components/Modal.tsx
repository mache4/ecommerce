interface Props {
    text: string
}

const Modal = (props: Props) => {
    return (
        <div className="">
            <p>{props.text}</p>
        </div>
    );
}

export default Modal;