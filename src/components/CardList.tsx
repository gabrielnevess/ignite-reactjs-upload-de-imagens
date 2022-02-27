import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const modal = useDisclosure();
  const [url, setUrl] = useState('');

  function openImageModal(imageUrl: string): void {
    setUrl(imageUrl);
    modal.onOpen();
  }

  return (
    <>
      <SimpleGrid columns={[2, 2, 2, 3]} spacing="40px">
        {cards.map(image => (
          <Card key={image.id} data={image} viewImage={openImageModal} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        imgUrl={url}
      />
    </>
  );
}
