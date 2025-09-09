import { createContext, createSignal, JSX } from "solid-js";
import { IMessageContext } from "~/types";

export const initialMessage = { value: "", isError: false }

const MessageContext = createContext<IMessageContext>()

export const MessageProvider = (props: { children: JSX.Element }) => {
    const [message, setMessage] = createSignal(initialMessage)
    const displayMessage = (value: string, isError: boolean) => {
        console.log(value, isError);
        setMessage({
            value: value,
            isError: isError,
        })

        setTimeout(() => {
            setMessage({ ...initialMessage });
        }, 3000);
    }
    return < MessageContext.Provider value={{ message, displayMessage }} > {props.children}</MessageContext.Provider>
};

export default MessageContext