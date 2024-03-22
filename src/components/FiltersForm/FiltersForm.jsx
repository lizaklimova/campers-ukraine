import { FILTERS_TYPE, FILTERS_EQUIPMENT } from "constants";
import { LocationIcon } from "components/icons";
import {
  FiltersWrap,
  FormFilters,
  LabelFilters,
  LabelLocation,
  RadioBtn,
  CheckBox,
  SearchButton,
  FieldSet,
  InputWrap,
} from "./FiltersForm.styled";

const FiltersForm = () => {
  return (
    <FormFilters>
      <LabelLocation>
        Location
        <input type="text" defaultValue="Kyiv, Ukraine" />
        <LocationIcon width={20} height={20} />
      </LabelLocation>

      <FiltersWrap>
        Filters
        <LabelFilters>
          Vehicle equipment
          <hr />
          <FieldSet>
            {FILTERS_EQUIPMENT.map(({ value, icon: Icon, text }, i) => (
              <InputWrap key={`${text}/${i}`}>
                <input type="checkbox" name="equipment" value={value} />
                <CheckBox>
                  <Icon width={20} height={20} size={20} /> {text}
                </CheckBox>
              </InputWrap>
            ))}
          </FieldSet>
        </LabelFilters>
        <LabelFilters>
          Vehicle type
          <hr />
          <FieldSet>
            {FILTERS_TYPE.map(({ value, icon: Icon, text }, i) => (
              <InputWrap key={`${text}/${i}`}>
                <input type="radio" name="type" value={value} />
                <RadioBtn>
                  <Icon width={20} height={20} /> {text}
                </RadioBtn>
              </InputWrap>
            ))}
          </FieldSet>
        </LabelFilters>
      </FiltersWrap>

      <SearchButton type="submit">Search</SearchButton>
    </FormFilters>
  );
};

export default FiltersForm;
