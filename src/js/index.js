try {
  const phoneModal = document.querySelector('.phone-modal')
  const phoneModalToggle = document.querySelector('.phone-modal-toggle')
  const phoneModalClose = document.querySelector('.phone-modal__close')
  const phoneModalOverlay = document.querySelector('.phone-modal-overlay')
  if (phoneModal && phoneModalToggle && phoneModalClose && phoneModalOverlay) {
    const handleModalToggle = (show) => {
      if (!show && phoneModal.classList.contains('show'))
        phoneModal.classList.remove('show')
      if (show && !phoneModal.classList.contains('show'))
        phoneModal.classList.add('show')
      console.log('test')
    }
    phoneModalToggle.addEventListener('click', () => handleModalToggle(true))
    phoneModalClose.addEventListener('click', () => handleModalToggle(false))
    phoneModalOverlay.addEventListener('click', () => handleModalToggle(false))
    document.addEventListener('keydown',  (e) => {
      if (e.keyCode === 27) handleModalToggle(false)
    })
  }
} catch (e) {
  console.log(e)
}