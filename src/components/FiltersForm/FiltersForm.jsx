import { useState } from "react";
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
import { gerAllSearchParams, smoothScrollToTarget } from "helpers";

const FiltersForm = ({ setPage, searchParams, setSearchParams }) => {
  const [location, setLocation] = useState("Ukraine");
  const [filterParams, setFilterParams] = useState({});

  const params = {};
  gerAllSearchParams(searchParams, params);

  const handleFilterAdverts = (e) => {
    e.preventDefault();
    setSearchParams({});
    setPage(1);
    setSearchParams({ ...filterParams, filter: location });
    smoothScrollToTarget("advertBlock");
  };

  return (
    <FormFilters onSubmit={handleFilterAdverts}>
      <LabelLocation>
        Location
        <input
          type="text"
          defaultValue="Ukraine, Kyiv"
          onChange={({ target }) => setLocation(target.value)}
        />
        <LocationIcon width={20} height={20} />
      </LabelLocation>

      <FiltersWrap>
        Filters
        <LabelFilters>
          Vehicle equipment
          <hr />
          <FieldSet>
            {FILTERS_EQUIPMENT.map(({ name, value, icon: Icon, text }, i) => (
              <InputWrap key={`${text}/${i}`}>
                <input
                  type="checkbox"
                  name={name}
                  value={value}
                  defaultChecked={params[name] === value}
                  onChange={({ target }) => {
                    if (target.checked) {
                      setFilterParams((prev) => ({
                        ...prev,
                        [target.name]: target.value,
                      }));
                    } else {
                      setFilterParams((prev) => {
                        const { [target.name]: removedParam, ...rest } = prev;
                        return { ...rest };
                      });
                    }
                  }}
                />
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
                <input
                  type="radio"
                  name="type"
                  value={value}
                  defaultChecked={params.form === value}
                  onChange={({ target }) =>
                    setFilterParams((prev) => ({
                      ...prev,
                      form: target.value,
                    }))
                  }
                />
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
