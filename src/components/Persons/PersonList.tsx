import { action, useAction } from "@solidjs/router";
import { Context, For, Suspense, useContext } from "solid-js"
import FilterContext from "~/context/FilterContext";
import useMessageContext from "~/hooks/useMessageContext";
import usePersonContext from "~/hooks/usePersonContext";
import Person from "~/models/person";
import { IPerson, type IFilterContext } from "~/types";

const deletePerson = action(async (id) => {
    "use server"
    await Person.findByIdAndDelete(id)
}, 'delete-person')

const PersonList = () => {
    const persons = usePersonContext()
    const { displayMessage } = useMessageContext()
    const { filter } = useContext(FilterContext as Context<IFilterContext>)
    const removeById = useAction(deletePerson)
    const handleDeleteClick = async (p: IPerson) => {
        // console.log("id", id);
        try {
            await removeById(p._id)
        } catch {
            displayMessage(`Information of ${p.name} has already been removed from server`, true)
        }

    }

    return (
        <Suspense fallback="loading user...">
            <For each={persons()?.filter(p => p.name.toLowerCase().includes(filter().toLowerCase()))}
                fallback={<div>no result</div>}>
                {item => (<li>{item?.name} {item?.number}<button onClick={() => handleDeleteClick(item)} >delete</button></li>)}
            </For>
        </Suspense>
    )
}

export default PersonList