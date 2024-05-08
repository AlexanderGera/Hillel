import './App.css';
import {Formik, Form, Field} from "formik";
import {MainContentWrapper} from "./components/MainContentWrapper/MainContentWrapper.jsx";

function App() {


    function validate(value) {
        const errors = {};
        console.log(value);
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
                    {(formParameter) => {
                        console.log(formParameter);
                        return <Form className="form_wrapper">
                            <label htmlFor="firstName">First name: </label>
                            <Field id="firstName" name="firstName" placeholder="Put your first name"/><br/>

                            <label htmlFor="name">Name: </label>
                            <Field id="name" name="name" placeholder="Put your name"/><br/>

                            <label htmlFor="email">E-mail: </label>
                            <Field id="email" name="email" placeholder="Put your e-mail"/><br/>

                            <label htmlFor="telNumber">Tel. number: </label>
                            <Field id="telNumber" name="telNumber" placeholder="Put your phone number"/><br/>

                            <button type="submit">Submit</button>


                        </Form>;

                    }}


                </Formik>
            </MainContentWrapper>

        </>
    )
}

export default App
