import { List, ListItem, Text } from './Reviews.styled';

export const ReviewList = ({ reviews }) => {
  return (
    <List>
      {reviews &&
        reviews.map(({ content, id, author }) => (
          <ListItem key={id}>
            <h4>Author: {author}</h4>
            <Text>{content}</Text>
          </ListItem>
        ))}
    </List>
  );
};
