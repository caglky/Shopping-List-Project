export default function Summary( {items} ){
  const itemsCount = items.length;
  const completedItemsCount = items.filter(item => item.completed).length
  return(
    <>
    {completedItemsCount == itemsCount && itemsCount>0 ? (<footer className="summary"> You completed all product </footer>) 
    : itemsCount > 0 ? (<footer className="summary">There is {itemsCount} product on your shopping bag, {completedItemsCount} of them is completed</footer>) 
    : (<p className="summary">There is no any product yet</p>)}
    </>
  )
}