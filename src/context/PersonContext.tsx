import { createAsync, query, type RouteDefinition } from "@solidjs/router";
import { createContext, JSX } from "solid-js";
import Person from "~/models/person";
import { IPerson, IPersonContext } from "~/types";

const getPersons = query(async () => {
    "use server"
    const persons = await Person.find({}).lean()
    return persons.map(p => ({
        _id: p._id.toString(),
        name: p.name,
        number: p.number,
    })) as IPerson[]
}, "persons")

export const route = {
    preload: () => getPersons(),
} satisfies RouteDefinition;

const PersonContext = createContext<IPersonContext>()

export const PersonProvider = (props: { children: JSX.Element }) => {
    const persons = createAsync(() => getPersons()) as IPersonContext
    return < PersonContext.Provider value={persons} >
        {props.children}
    </PersonContext.Provider>
};

export default PersonContext