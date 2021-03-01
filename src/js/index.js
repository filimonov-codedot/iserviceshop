try {
  const phoneModal = document.querySelector('.phone-modal')
  const phoneModalToggle = document.querySelector('.phone-modal-toggle')
  const phoneModalClose = document.querySelector('.phone-modal__close')
  const phoneModalOverlay = document.querySelector('.phone-modal-overlay')
  if (phoneModal && phoneModalToggle && phoneModalClose && phoneModalOverlay) {
    const handleModalToggle = (show) => {
      if (!show && phoneModal.classList.contains('show-phone-modal'))
        phoneModal.classList.remove('show-phone-modal')
      if (show && !phoneModal.classList.contains('show-phone-modal'))
        phoneModal.classList.add('show-phone-modal')
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