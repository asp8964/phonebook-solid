import { useContext } from "solid-js";
import PersonContext from "~/context/PersonContext";

const usePersonContext = () => {
    const value = useContext(PersonContext);

    if (!value) {
        throw new Error("Missing context Provider");
    }

    return value;
}

export default usePersonContext