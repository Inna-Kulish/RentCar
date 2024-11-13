import CarItem from "../CarItem/CarItem";
import { List } from "./CarsList.styled";

export default function CarsList({ cars }) {
  return (
    <List>
      {cars.map((item) => (
        <CarItem key={item.id} data={item} />
      ))}
    </List>
  );
}
