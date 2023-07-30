import { useRef } from "react";
import { addHomeImage } from "../core/api";

interface Props {

}

const ProductCreator = (props: Props) => {
    const nameRef = useRef<any>();
    const typeRef = useRef<any>();
    const imageRef = useRef<any>();

    const submitForm = async () => {
        const imageBase64: any = await convertBase64(imageRef.current.files[0]);

        console.log(imageBase64)

        addHomeImage({
            _id: "",
            name: nameRef.current.value,
            image: imageBase64,
            type: typeRef.current.value,
            createdAt: Date.now().toString()
        })
        // console.log(convertBase64(image1Ref.current.files[0]))
    }

    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <div className="flex flex-col text-center w-1/4 pl-5">
            <label className="text-left">name: </label><input type="text" ref={nameRef} className="border" />
            <label className="text-left">image: </label><input type="file" ref={imageRef} className="border" />
            <label className="text-left">type: </label><input type="text" ref={typeRef} className="border" />
            <button onClick={submitForm} className="border bg-blue my-4">Submit</button>
        </div>
    );
}

export default ProductCreator;