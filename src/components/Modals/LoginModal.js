import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from 'contexts/authContext'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const LoginModal = () => {
  const [loginModal, setLoginModal] = React.useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleSignIn = async (e) => {
    e.preventDefault()

    const id = toast.loading('Iniciando sesión...', {
      position: toast.POSITION.BOTTOM_CENTER,
    })

    try {
      const user = await login(email, password)

      if (user) {
        toast.update(id, {
          render: 'Ingresaste correctamente',
          type: toast.TYPE.SUCCESS,
          autoClose: 3000,
          hideProgressBar: true,
          isLoading: false,
          pauseOnHover: false,
        })
        //setLoginModal(false)
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.update(id, {
          render: 'No existe un usuario con ese correo',
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          autoClose: 3000,
          isLoading: false,
          pauseOnHover: false,
        })
      } else if (error.code === 'auth/wrong-password') {
        toast.update(id, {
          render: 'Contraseña incorrecta',
          type: toast.TYPE.ERROR,
          autoClose: 3000,
          hideProgressBar: true,
          isLoading: false,
          pauseOnHover: false,
        })
      } else {
        toast.update(id, {
          render: 'Error al intentar iniciar sesión',
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          autoClose: 3000,
          isLoading: false,
          pauseOnHover: false,
        })
      }
    }
  }

  return (
    <>
      <NavLink
        to='/ingresar'
        tag={Link}
        id='icon_ingresar'
        onClick={(e) => {
          e.preventDefault()
          setLoginModal(true)
        }}
        className='rounded'
      >
        <i className='fas fa-unlock-keyhole px-2'></i>
      </NavLink>
      <UncontrolledTooltip target='icon_ingresar'>
        Iniciar Sesión
      </UncontrolledTooltip>
      <Modal
        isOpen={loginModal}
        className='modal-dialog-centered modal-login'
        modalClassName='modal-dark'
        toggle={() => setLoginModal(false)}
      >
        <Card className='card-login card-plain mb-1'>
          <div className='modal-header justify-content-center pt-0'>
            <button
              aria-hidden={true}
              className='close d-none'
              type='button'
              onClick={() => setLoginModal(false)}
            >
              <i
                id='closeLoginModal'
                className='now-ui-icons ui-1_simple-remove'
              />
              <UncontrolledTooltip target='closeLoginModal' placement='left'>
                Presione ESC
              </UncontrolledTooltip>
            </button>
            <div className='header header-primary text-center'>
              <div className='logo-container w-60 mx-auto'>
                <img
                  alt='...'
                  src={require('assets/img/flores/grupo_luna_gris.png').default}
                ></img>
                <h5>Integrantes Sattwa 108</h5>
              </div>
            </div>
          </div>
          <ModalBody data-background-color='' className='pt-0'>
            <Form action='' className='form' method=''>
              <CardBody className='pt-0'>
                <InputGroup className='form-group-no-border input-lg'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='now-ui-icons ui-1_email-85'></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Correo...'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                  ></Input>
                </InputGroup>
                <InputGroup className='form-group-no-border input-lg'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='now-ui-icons ui-1_lock-circle-open'></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Contraseña...'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                </InputGroup>
              </CardBody>
            </Form>
          </ModalBody>
          <ModalFooter className='text-center py-0 px-5'>
            <Button
              block
              className='btn-neutral btn-round'
              color='default'
              href='#sattwa108'
              onClick={handleSignIn}
              size='lg'
            >
              Ingresar
            </Button>
          </ModalFooter>
          <div className='text-center'>
            <small>
              Hecho con <i className='text-danger fas fa-heart' /> por Santiago
              Agudelo
            </small>
          </div>
        </Card>
      </Modal>
    </>
  )
}

export default LoginModal
