import { ChatsFallback } from "@/components/shared/chats";
import { ItemList } from "@/components/shared/item-list";

export default function page() {
  return (
    <>
      <ItemList title="Friends">Friends Page</ItemList>
      <ChatsFallback />
    </>
  )
}
