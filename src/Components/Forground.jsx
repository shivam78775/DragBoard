import React, {useRef, useState} from 'react'
import Card from './Card'
import AddNote from './Add'

function Forground() {
  const ref = useRef(null);
  const [cards, setCards] = useState([
    {
      title: "Sample Note",
      desc: "This is a sample note. Click the + button to add your own notes!",
      fileSize: `${(Math.random() * 1000).toFixed(1)}kb`,
      close: false,
      tag: {isOpen: true, tagColor: "#3B82F6" },
    }
  ]);

  const addNewCard = (title, description, tag, tagColor) => {
    const newCard = {
      title: title,
      desc: description,
      fileSize: `${(Math.random() * 1000).toFixed(1)}kb`,
      close: false,
      tag: {
        isOpen: true,
        tagColor: tagColor
      }
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  return (
    <>
    <div>
        <div ref={ref} className='w-full fixed h-screen top-0 left-0 z-[3]  flex gap-10 flex-wrap p-5'>
          <AddNote onAddCard={addNewCard} />
          {cards.map((item, index)=>(
            <Card 
              key={index} 
              data={item} 
              reference={ref}
              onDelete={() => deleteCard(index)}
            />
          ))}
        </div>
    </div>
    </>
  )
}

export default Forground