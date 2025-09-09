import { action, useAction } from "@solidjs/router";
import { useField } from "~/hooks/useField";
import useMessageContext from "~/hooks/useMessageContext";
import usePersonContext from "~/hooks/usePersonContext";
import Person from "~/models/person";
import { IInputProps } from "~/types";

const create = action(async (name, number) => {
  "use server"
  const person = new Person({
    name: name,
    number: number,
  });
  await person.save()
}, 'create-person')

const update = action(async (id: string, number: string) => {
  "use server"
  const opts = { runValidators: true }
  await Person.findByIdAndUpdate(id, { number: number }, opts)
}, 'update-person')

const PersonForm = () => {
  const persons = usePersonContext()
  const { displayMessage } = useMessageContext()
  const { reset: resetName, ...name } = useField()
  const { reset: resetNumber, ...number } = useField()
  const createPerson = useAction(create)
  const updatePerson = useAction(update)

  const handlePerson = (e: SubmitEvent) => {
    e.preventDefault();
    // console.log(name.value(), number.value());
    const existedPerson = persons().find(p => p.name === name.value())
    console.log(existedPerson);

    if (existedPerson) {
      if (window.confirm(
        `${name.value()} is already added to phone book, replace the old number with a new one?`
      )) {
        updatePerson(existedPerson._id, number.value())
        displayMessage(`Updated ${name.value()}`, false)
      }
    } else {
      createPerson(name.value(), number.value())
      displayMessage(`Added ${name.value()}`, false)
    }
    resetName()
    resetNumber()
  };

  return (
    <form onSubmit={handlePerson}>
      <Input text="name:" field={name} />
      <Input text="number" field={number} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>)
}

const Input = ({ text, field }: IInputProps) => (<>{text} <input value={field.value()} onChange={field.onChange} /></>)

export default PersonForm