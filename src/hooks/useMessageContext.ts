import { useContext } from "solid-js";
import MessageContext from "~/context/MessageContext";

const useMessageContext = () => {
    const value = useContext(MessageContext);

    if (!value) {
        throw new Error("Missing context Provider");
    }

    return value;
}

export default useMessageContext