import { Formik } from "formik";
import bookVanSchema from "schemas";
import { FORM_INIT_VALUES } from "constants";
import Calendar from "./Calendar";
import CalendarIcon from "components/icons/CalendarIcon";
import {
  ErrorMsg,
  Form,
  Label,
  SubmitBtn,
  TitleBlock,
} from "./BookForm.styled";

const BookForm = () => {
  const handleFormSubmit = async ({ name, email, date, comment }) => {
    const formData = {
      name,
      email,
      date,
      comment,
    };

    const isValid = await bookVanSchema.isValid(formData);

    if (!isValid) {
      return;
    }

    console.log(formData);
  };

  return (
    <Formik
      initialValues={FORM_INIT_VALUES}
      onSubmit={handleFormSubmit}
      validationSchema={bookVanSchema}
    >
      {({ touched, errors, handleSubmit, getFieldProps }) => (
        <Form onSubmit={handleSubmit}>
          <TitleBlock>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </TitleBlock>

          <Label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </Label>

          <Label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email && (
              <ErrorMsg>{errors.email}</ErrorMsg>
            )}
          </Label>

          <Label>
            {<Calendar />}
            <CalendarIcon width={20} height={20} />
            {errors.date && touched.date && <ErrorMsg>{errors.date}</ErrorMsg>}
          </Label>

          <Label>
            <textarea
              name="comment"
              placeholder="Comment"
              {...getFieldProps("comment")}
            />
            {errors.comment && touched.comment && (
              <ErrorMsg>{errors.comment}</ErrorMsg>
            )}
          </Label>

          <SubmitBtn type="submit" disabled={Object.keys(errors).length > 0}>
            Send
          </SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
