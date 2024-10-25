import { useSelector, useDispatch } from "react-redux";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectCars } from "../../redux/selectors";
import { changeFilter } from "../../redux/filter/slice";
import { getPriceNumber } from "../../services/getPriceNumber";
import { Form, Label, Input, InputRight, Button, StyledSelect, InputWrap, InputSpan, InputBox } from "./SearchForm.styled";
import { useState } from "react";

export default function SearchForm({clearPage}) {
  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const carBrands = Array.from(new Set(cars.map(car => car.make)));
  const carPrice = getPriceNumber(cars);

  const handleChange = (e) => {
    let value = e.target.value.replace(/,/g, '');

    if (!isNaN(value)) {
      let formattedValue = new Intl.NumberFormat("en-IN").format(value);

      if (e.target.name === 'milefrom') {
        setInputFrom(formattedValue);
        return;
      }
      setInputTo(formattedValue);
    } else {
      setInputFrom('');
      setInputTo('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const valueBrand = form.elements.brand.value;
    const valuePrice = Number(form.elements.price.value);
    const valueMileFrom = Number(inputFrom.replace(/,/g, ''));
    const valueMileTo = Number(inputTo.replace(/,/g, ''));
    
    
    if (!valueBrand && !valuePrice && !valueMileFrom && !valueMileTo) {
      clearPage();
    }
    
    dispatch(
      changeFilter({
        brand: valueBrand,
        price: valuePrice,
        milefrom: valueMileFrom,
        mileto: valueMileTo,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="brand">
        Car brand
        <StyledSelect
          name="brand"
          placeholder="Enter the text"
          classNamePrefix="react-select"
          noOptionsMessage={() => 'No brands'}
          options={[{label: "Enter the text",
            value: "",}, ...carBrands.map((item) => ({
            label: item,
            value: item,
          }))]}
        />
      </Label>
      <Label htmlFor="price">
        Price/ 1 hour
        <StyledSelect
          name="price"
          placeholder="To UAH"
          classNamePrefix="react-select"
          noOptionsMessage={() => 'No price'}
          options={[{label: "To UAH",
            value: 0,}, ...carPrice.map((item) => ({
            label: item,
            value: item,
          }))]}
        />
      </Label>
      <InputBox>
      <Label htmlFor="milefrom">
        Сar mileage / km
        <InputWrap>
          <InputSpan>From </InputSpan>
          <Input name="milefrom" type="text" maxLength="5" value={inputFrom} onChange={handleChange} />
          </InputWrap>
           </Label>
          <Label htmlFor="mileto">
        <InputWrap>
          <InputSpan>To</InputSpan>
          <InputRight name="mileto" type="text" maxLength="6" value={inputTo} onChange={handleChange}/>
        </InputWrap>
        </Label>
        </InputBox>
      <Button type="submit">Search</Button>
    </Form>
  );
}
