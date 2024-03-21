import { PiWind } from "react-icons/pi";
import { returnDetailsItem } from "helpers";
import {
  AdultsIcon,
  BedIcon,
  KitchenIcon,
  PetrolIcon,
  TransmissionIcon,
  ConditionerIcon,
  CDIcon,
  RadioIcon,
  HobIcon,
  TVIcon,
  ShowerIcon,
  ToiletIcon,
  FreezerIcon,
  GasIcon,
  WaterIcon,
  MicrowaveIcon,
} from "components/icons";
import { DetailsList } from "components/AdvertCard/AdvertCard.styled";
import {
  FeatureWrap,
  DetailsItemsWrap,
  VehicleDetailsWrap,
  VehicleDetailsList,
} from "./Features.styled";

const Features = ({
  card: {
    details,
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) => {
  return (
    <FeatureWrap>
      <DetailsItemsWrap>
        <DetailsList>
          <li>
            <AdultsIcon width={20} height={20} /> {`${adults} adults`}
          </li>

          <li className="capitalize">
            <TransmissionIcon width={20} height={20} />
            {transmission}
          </li>

          {returnDetailsItem(
            details.airConditioner,
            "AC",
            <PiWind
              width={20}
              height={20}
              style={{ fill: "var(--text-color)" }}
            />
          )}

          <li className="capitalize">
            <PetrolIcon width={20} height={20} />
            {engine}
          </li>

          {returnDetailsItem(
            details.kitchen,
            "kitchen",
            <KitchenIcon width={20} height={20} />
          )}

          <li>
            <BedIcon width={20} height={20} />
            {`${details.beds} beds`}
          </li>

          <li>
            <ConditionerIcon width={20} height={20} />
            {`${details.airConditioner} air conditioner`}
          </li>

          {returnDetailsItem(
            details.CD,
            "CD",
            <CDIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.radio,
            "Radio",
            <RadioIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.TV,
            "TV",
            <TVIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.hob,
            `${details.hob} hob`,
            <HobIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.shower,
            `${details.shower} shower`,
            <ShowerIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.freezer,
            `${details.freezer} freezer`,
            <FreezerIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.toilet,
            `${details.toilet} toilet`,
            <ToiletIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.microwave,
            `${details.microwave} microwave`,
            <MicrowaveIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.gas,
            details.gas,
            <GasIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            details.water,
            details.water,
            <WaterIcon width={20} height={20} />
          )}
        </DetailsList>
      </DetailsItemsWrap>

      <VehicleDetailsWrap>
        <h3>Vehicle details</h3>
        <hr />
        <VehicleDetailsList>
          <li className="capitalize">
            <p>Form</p>
            <p>{form}</p>
          </li>

          <li>
            <p>Length</p>
            <p>{length}</p>
          </li>

          <li>
            <p>Width</p>
            <p>{width}</p>
          </li>

          <li>
            <p>Height</p>
            <p>{height}</p>
          </li>

          <li>
            <p>Tank</p>
            <p>{tank}</p>
          </li>

          <li>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </VehicleDetailsList>
      </VehicleDetailsWrap>
    </FeatureWrap>
  );
};

export default Features;
