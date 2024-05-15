import { Formik } from 'formik'
import InputLabel from '../components/input/InputLabel.jsx'
import ButtonSubmit from '../components/button/ButtonSubmit.jsx'

const Register = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white roundfed-lg shadow dark:border md:mt-0 sm:max-w-md x1:p-0 dark:bg-gray-800">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-x1 font-bold leading-tight tracking-tight text-gray-900 md:text-2x1">
                            Sign up
                        </h1>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} >
                            <form className='space-y-5'>
                                <InputLabel label="correo" type="email" name="email" placeholder="example@domain.com"/>
                                <InputLabel label="nombre" name="nombre" placeholder="Your name here"/>
                                <InputLabel label="password" type="password" name="password" placeholder="Password here"/>
                                <InputLabel label="Confirm password" type="password" name="password_confirmation" placeholder="confirm password"/>
                                <ButtonSubmit name="Registrar"/>
                            </form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register