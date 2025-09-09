import FilterByName from "./FilterByName"
import PersonForm from "./PersonForm"
import PersonList from "./PersonList"

const Persons = () => {
  return (
    <>
      <FilterByName />
      <h4>Add a new</h4>
      <PersonForm />
      <h4>Numbers</h4>
      <PersonList />
    </>
  )
}

export default Persons