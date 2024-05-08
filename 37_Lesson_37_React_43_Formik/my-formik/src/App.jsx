import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {MainContentWrapper} from "./components/MainContentWrapper/MainContentWrapper.jsx";

function App() {


    function validate(value) {
        const errors = {};
        console.log(value);

        if (!value.firstName) {
            errors.firstName = "Required";
        } else if (!/^[A-Za-z]+$/.test(value.firstName)) {
            errors.firstName = 'Put correct First name';
        }

        if (!value.name) {
            errors.name = "Required";
        } else if (!/^[A-Za-z]+$/.test(value.name)) {
            errors.name = 'Put correct Name';
        }

        if (!value.email) {
            errors.email = "Required";
        } else if (!/@/.test(value.email)) {
            errors.email = 'Put correct E-mail';
        }

        if (!value.telNumber) {
            errors.telNumber = "Required";
        } else if (value.telNumber.length !== 12) {
            errors.telNumber = 'Tell number must 12 numbers contain';
        } else if (!/^\d+$/.test(value.telNumber)) {
            errors.telNumber = 'Tell number must only numbers contain';
        }

    return errors;
    }


    return (
        <>
            <header>
                <span className="header_title">Fill in the form:</span>
            </header>
            <MainContentWrapper>
                <Formik
                    //объект initialValues для задания начальных значений полей формы.
                    initialValues={{
                        firstName: '',
                        name: '',
                        email: '',
                        telNumber: '',
                    }}

                    validate={validate}

                    //функция которая срабатывает когда мы делаем Субмит
                    onSubmit={(value) => {
                        console.log('onSubmit', value);
                    }}
                >

                    {() => {
                        return <Form className="form_wrapper">

                            <label htmlFor="firstName">First name: </label>
                            <Field id="firstName" name="firstName" placeholder="Put your first name"/>
                            <ErrorMessage name="firstName" component="span"/><br/>

                            <label htmlFor="name">Name: </label>
                            <Field id="name" name="name" placeholder="Put your name"/>
                            <ErrorMessage name="name" component="span"/><br/>

                            <label htmlFor="email">E-mail: </label>
                            <Field id="email" name="email" placeholder="Put your e-mail"/>
                            <ErrorMessage name="email" component="span"/><br/>


                            <label htmlFor="telNumber">Tel. number: </label>
                            <Field id="telNumber" name="telNumber" placeholder="Put your phone number"/>
                            <ErrorMessage name="telNumber" component="span"/><br/>

                            <button type="submit">Submit</button>


                        </Form>;

                    }}


                </Formik>
            </MainContentWrapper>

        </>
    )
}

export default App
