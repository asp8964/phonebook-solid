import Notification from "~/components/Notifacation";
import Persons from "~/components/Persons";
import { FilterProvider } from "~/context/FilterContext";
import { MessageProvider } from "~/context/MessageContext";
import { PersonProvider } from "~/context/PersonContext";

export default function Home() {
  return (
    <main>
      <PersonProvider>
        <MessageProvider>
          <FilterProvider>
            <h1>PhoneBook</h1>
            <Notification />
            <Persons />
          </FilterProvider>
        </MessageProvider>
      </PersonProvider>
    </main>
  );
}